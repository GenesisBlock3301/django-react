from rest_framework.generics import ListAPIView,RetrieveAPIView,CreateAPIView,UpdateAPIView,DestroyAPIView
from rest_framework.views import APIView
from ..models import Article
from .serializers import *
from rest_framework.response import Response
from rest_framework import permissions,status,viewsets
from rest_framework.renderers import JSONRenderer

class ArticleViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    








# class ArticleListView(ListAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer
#
# class ArticleDetailView(RetrieveAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer
#
# # class ArticleCreateView(APIView):
# #     permission_classes = [permissions.AllowAny]
# #
# #     def post(self,request,format=None):
# #         serializer = ArticleSerializer(data=request.data)
# #
# #         if serializer.is_valid(raise_exception=True):
# #             serializer.save()
# #             return Response(serializer.data,status=status.HTTP_201_CREATED)
# # #         return Response(serializer.errors,status=status.HTTP_501_NOT_IMPLEMENTED)
#
# class ArticleCreateView(CreateAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer
#
# class ArticleUpdateView(UpdateAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer
#
# class ArticleDeleteView(DestroyAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer





