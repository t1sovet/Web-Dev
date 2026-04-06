from django.urls import path
from rest_framework.routers import DefaultRouter

from . import views
from .views import *

router = DefaultRouter()
router.register('categories', CategoryViewSet)
router.register('products', ProductViewSet)

urlpatterns = router.urls

urlpatterns = [
    # ex: /api/
    path("", views.index, name="index"),
    # ex: /api/products/
    path("products/", views.prods, name="prods"),
    # ex: /api/products/5
    path("products/<int:product_id>/", views.prodsid, name="prodsid"),
    # ex: /api/categories/
    path("categories/", views.categs, name="categs"),
    # ex: /api/catergories/id/
    path("categories/<int:category_id>/", views.categid, name="categid"),
    # ex: /api/catergories/id/products
    path("categories/<int:category_id>/products/", views.categprods, name="categprods"),
]