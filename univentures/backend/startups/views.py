from rest_framework import generics
from .models import Startup
from .serializers import StartupSerializer

class StartupList(generics.ListCreateAPIView):
    queryset = Startup.objects.all()
    serializer_class = StartupSerializer

class StartupDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Startup.objects.all()
    serializer_class = StartupSerializer
