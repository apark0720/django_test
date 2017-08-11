from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from backend.startups.models import Startup
from .serializers import StartupSerializer

class StartupList(APIView):
    def get(self, request):
        startups = Startup.objects.all()
        serializer = StartupSerializer(startups, many=True)
        return Response(serializer.data)
    
    def post(self):
        pass