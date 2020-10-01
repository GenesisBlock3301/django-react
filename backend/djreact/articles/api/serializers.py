from rest_framework import serializers
from ..models import *

class ArticleSerializer(serializers.ModelSerializer):
    # title = serializers.CharField(required=True)
    # content = serializers.CharField(required=True)

    class Meta:
        model = Article
        fields = "__all__"
