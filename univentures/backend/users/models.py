from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import ugettext_lazy as _from django.db import models

class User(AbstractUser):
    username = None

    email = models.EmailField(_('email address'), unique=True)
    profile_img = models.FileField()
    user_blurb = models.TextField(max_length=150)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
