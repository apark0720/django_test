from django.db import models

class Startup(models.Model):
    name = models.CharField(max_length=20)
    email = models.CharField(max_length=30)
    logo = models.FileField()
    blurb = models.TextField(max_length=150)
    description = models.TextField(max_length=1000)
    created = models.DateTimeField(auto_now_add=True)
    # user_id

    class Meta:
        ordering = ('created',)

    def __str__(self):
        return self.name