from django.db import models

class Startup(models.Model):
    startup_name = models.CharField(max_length=10)
    statrup_email = models.CharField(max_length=20)
    startup_logo = models.FileField()
    startup_blurb = models.TextField(max_length=150)
    startup_description = models.TextField(max_length=1000)
    # user_id

    def __str__(self):
        return self.startup_name