from rest_framework.routers import DefaultRouter
from .views import ArticleViewSet
router = DefaultRouter()
router.register(r'', ArticleViewSet, basename='articles')
urlpatterns = router.urls


# from django.urls import path

# from .views import (
#     ArticleListView,
#     ArticleDetailView,
#     ArticleCreateView,
#     ArticleUpdateView,
#     ArticleDeleteView
# )

# urlpatterns = [
#     path('', ArticleListView.as_view()),
#     path('create', ArticleCreateView.as_view()),
#     path('<pk>', ArticleDetailView.as_view()),
#     path('update/<pk>', ArticleUpdateView.as_view()),
#     path('delete/<pk>', ArticleDeleteView.as_view()),
# ]
