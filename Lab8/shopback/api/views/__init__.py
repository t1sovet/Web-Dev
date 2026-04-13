from .viewsets import CategoryViewSet, ProductViewSet
from .fbv import products_list, product_detail
from .cbv import (
    ProductListAPIView as CBVProductListAPIView,
    ProductDetailAPIView as CBVProductDetailAPIView,
)
from .mixins import (
    ProductListAPIView as MixinsProductListAPIView,
    ProductDetailAPIView as MixinsProductDetailAPIView,
)
from .generics import (
    ProductListAPIView as GenericsProductListAPIView,
    ProductDetailAPIView as GenericsProductDetailAPIView,
    CategoryListAPIView as GenericsCategoryListAPIView,
    CategoryDetailAPIView as GenericsCategoryDetailAPIView,
    CategoryProductsAPIView as GenericsCategoryProductsAPIView,
)
