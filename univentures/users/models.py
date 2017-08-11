from django.db import models

class User(models.Model):
    first_name = models.CharField()
    last_name = models.CharField()
    email = models.CharField()
    profile_img = models.FileField()
    user_blurb = models.TextField(max_length=150)
    
    def __str__(self):
        return self.id + ":" + self.first_name + " " + self.last_name