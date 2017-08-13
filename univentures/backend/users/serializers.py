from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    startups = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Snippet.objects.all())

    class Meta:
        model = User
        fields = ('id', 'email', 'first_name', 'last_name', 'profile_img', 'user_blurb')
