from django.db import models

class Startup(models.Model):
    startup_name = models.CharField(max_length=20)
    statrup_email = models.CharField(max_length=20)
    startup_logo = models.FileField()
    startup_description = models.TextField()
    # user_id

    def __str__(self):
        return self.startup_name