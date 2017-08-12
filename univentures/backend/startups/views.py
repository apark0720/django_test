from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Startup
from .serializers import StartupSerializer

@api_view(['GET', 'POST'])
def startup_list(request, format=None):
    # list all startups, or create a new startup
    if request.method == 'GET':
        startups = Startup.objects.all()
        serializer = StartupSerializer(startups, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = StartupSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def startup_detail(request, pk, format=None):
    # Retrieve, update or delete a startup instance.
    try:
        startup = Startup.objects.get(pk=pk)
    except startup.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        print (startup)
        serializer = StartupSerializer(startup)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = StartupSerializer(startup, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        startup.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
