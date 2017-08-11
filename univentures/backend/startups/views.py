from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics
from backend.startups.models import Startup
from .serializers import StartupSerializer

class StartupList(APIView):
    def get(self, request):
        startups = Startup.objects.all()
        serializer = StartupSerializer(startups, many=True)
        return Response(serializer.data)

class StartupDetail(generics.RetrieveUpdateDestroyAPIView):
    def get(self, request):
        queryset = Startup.objects.all()
        serializer = StartupSerializer(queryset, many=True)