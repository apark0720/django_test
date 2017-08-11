from django.db import models

class User(models.Model):
    first_name = models.CharField(max_length=15)
    last_name = models.CharField(max_length=15)
    email = models.CharField(max_length=20)
    profile_img = models.FileField()
    user_blurb = models.TextField(max_length=150)

    def __str__(self):
        return self.id + ":" + self.first_name + " " + self.last_name
