from django.urls import path
from rest_framework.routers import DefaultRouter

from . import views
from .views import *

router = DefaultRouter()
router.register('categories', CategoryViewSet)
router.register('products', ProductViewSet)

urlpatterns = router.urls
