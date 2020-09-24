from rest_framework.generics import ListAPIView,RetrieveAPIView
from ..models import Article
from .serializers import *

class ArticleListView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class ArticleDetailView(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer



