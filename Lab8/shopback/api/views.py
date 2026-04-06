from django.http import JsonResponse
from .models import Product, Category
from rest_framework import viewsets
from rest_framework.decorators import action
from .serializers import *

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    ser_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object()
        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# /api/
def index(request):
    return JsonResponse({"message": "Welcome to API"})


# /api/products/
def prods(request):
    products = Product.objects.all()

    data = []
    for p in products:
        data.append({
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "count": p.count,
            "is_active": p.is_active,
            "category_id": p.category.id
        })

    return JsonResponse(data, safe=False)


# /api/products/<id>/
def prodsid(request, product_id):
    try:
        p = Product.objects.get(id=product_id)

        data = {
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "count": p.count,
            "is_active": p.is_active,
            "category_id": p.category.id
        }

        return JsonResponse(data)

    except Product.DoesNotExist:
        return JsonResponse({"error": "Product not found"}, status=404)


# /api/categories/
def categs(request):
    categories = Category.objects.all()

    data = []
    for c in categories:
        data.append({
            "id": c.id,
            "name": c.name
        })

    return JsonResponse(data, safe=False)

def categid(request, category_id):
    try:
        c = Category.objects.get(id=category_id)

        data = {
            "id": c.id,
            "name": c.name
        }

        return JsonResponse(data)

    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)

# /api/categories/<id>/products/
def categprods(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
        products = Product.objects.filter(category=category)

        data = []
        for p in products:
            data.append({
                "id": p.id,
                "name": p.name,
                "price": p.price,
                "description": p.description,
                "count": p.count,
                "is_active": p.is_active,
            })

        return JsonResponse(data, safe=False)

    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)
    