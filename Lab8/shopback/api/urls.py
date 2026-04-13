from django.urls import path
from rest_framework.routers import DefaultRouter

from .views.viewsets import CategoryViewSet, ProductViewSet
from .views.fbv import products_list, product_detail
from .views.cbv import (
    ProductListAPIView as CBVProductListAPIView,
    ProductDetailAPIView as CBVProductDetailAPIView,
)
from .views.mixins import (
    ProductListAPIView as MixinsProductListAPIView,
    ProductDetailAPIView as MixinsProductDetailAPIView,
)
from .views.generics import (
    ProductListAPIView as GenericsProductListAPIView,
    ProductDetailAPIView as GenericsProductDetailAPIView,
    CategoryListAPIView as GenericsCategoryListAPIView,
    CategoryDetailAPIView as GenericsCategoryDetailAPIView,
    CategoryProductsAPIView as GenericsCategoryProductsAPIView,
)

router = DefaultRouter()
router.register('categories', CategoryViewSet)
router.register('products', ProductViewSet)

urlpatterns = router.urls + [
    # Level 2: Function-Based Views
    path('fbv/products/', products_list, name='fbv-products-list'),
    path('fbv/products/<int:product_id>/', product_detail, name='fbv-product-detail'),

    # Level 3: Class-Based Views
    path('cbv/products/', CBVProductListAPIView.as_view(), name='cbv-products-list'),
    path('cbv/products/<int:product_id>/', CBVProductDetailAPIView.as_view(), name='cbv-product-detail'),

    # Level 4: Mixins
    path('mixins/products/', MixinsProductListAPIView.as_view(), name='mixins-products-list'),
    path('mixins/products/<int:product_id>/', MixinsProductDetailAPIView.as_view(), name='mixins-product-detail'),

    # Level 5: Generics
    path('generics/products/', GenericsProductListAPIView.as_view(), name='generics-products-list'),
    path('generics/products/<int:product_id>/', GenericsProductDetailAPIView.as_view(), name='generics-product-detail'),
    path('generics/categories/', GenericsCategoryListAPIView.as_view(), name='generics-categories-list'),
    path('generics/categories/<int:category_id>/', GenericsCategoryDetailAPIView.as_view(), name='generics-category-detail'),
    path('generics/categories/<int:category_id>/products/', GenericsCategoryProductsAPIView.as_view(), name='generics-category-products'),
]
