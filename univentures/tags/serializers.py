from rest_framework import serializers
from .models import Startup 

class ProfileSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Startup
        fields = '__all__'
    