from django.db import transaction
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from api.models import Product, Category
from api.serializers import ProductSerializer, CategorySerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

    @action(detail=False, methods=['post'], url_path='buy')
    def buy(self, request):
        items = request.data.get('products')

        if not items or not isinstance(items, list):
            return Response(
                {'error': 'A non-empty "products" list is required.'},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Validate input structure before touching the database
        order = []
        for i, item in enumerate(items):
            product_id = item.get('id')
            quantity = item.get('quantity')

            if product_id is None or quantity is None:
                return Response(
                    {'error': f'Item at index {i} must have "id" and "quantity".'},
                    status=status.HTTP_400_BAD_REQUEST,
                )

            if not isinstance(quantity, int) or quantity <= 0:
                return Response(
                    {'error': f'Item at index {i} has invalid quantity. Must be a positive integer.'},
                    status=status.HTTP_400_BAD_REQUEST,
                )

            order.append((product_id, quantity))

        # Perform DB validation and updates atomically, locking rows to prevent overselling
        with transaction.atomic():
            bought = []
            total_price = 0.0
            for product_id, quantity in order:
                try:
                    product = Product.objects.select_for_update().get(pk=product_id)
                except Product.DoesNotExist:
                    return Response(
                        {'error': f'Product with id {product_id} does not exist.'},
                        status=status.HTTP_400_BAD_REQUEST,
                    )

                if not product.is_active:
                    return Response(
                        {'error': f'Product with id {product_id} is not active.'},
                        status=status.HTTP_400_BAD_REQUEST,
                    )

                if product.count < quantity:
                    return Response(
                        {'error': f'Product with id {product_id} does not have enough stock (available: {product.count}).'},
                        status=status.HTTP_400_BAD_REQUEST,
                    )

                product.count -= quantity
                product.save()
                total_price += product.price * quantity
                bought.append(ProductSerializer(product).data)

        return Response(
            {'total_price': total_price, 'bought_products': bought},
            status=status.HTTP_200_OK,
        )
