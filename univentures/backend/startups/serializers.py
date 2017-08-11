from rest_framework import serializers
from .models import Startup

class StartupSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=20)
    email = serializers.CharField(max_length=30)
    logo = serializers.FileField()
    blurb = serializers.CharField(max_length=150)
    description = serializers.CharField(max_length=1000)

    def create(self, validated_data):
        # create and return new Startup object, given the validated data
        return Startup.objects.create(**validated_data)

    def update(self, instance, validated_data):
        # update and return existing Startup object, given the validated data
        instance.name = validated_data.get('name', instance.name)
        instance.email = validated_data.get('email', instance.email)
        instance.logo = validated_data.get('logo', instance.logo)
        instance.blurb = validated_data.get('blurb', instance.blurb)
        instance.description = validated_data.get('description', instance.description)
        instance.save()
        return instance
