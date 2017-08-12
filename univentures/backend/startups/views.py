from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Startup
from .serializers import StartupSerializer

class StartupList(APIView):
    # List all Startups, or create a new Startup.

    def get(self, request, format=None):
        startups = Startup.objects.all()
        serializer = StartupSerializer(startups, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = StartupSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class StartupDetail(APIView):
    # Retrieve, update or delete a startup instance.

    def get_object(self, pk):
        try:
            return Startup.objects.get(pk=pk)
        except Startup.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        startup = self.get_object(pk)
        serializer = StartupSerializer(startup)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        startup = self.get_object(pk)
        serializer = StartupSerializer(startup, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        startup = self.get_object(pk)
        startup.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
