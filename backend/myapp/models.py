from django.db import models

from django.contrib.auth.models import AbstractUser, Group, Permission

class CustomUser(AbstractUser):
    pass

class Document(models.Model):
       title = models.CharField(max_length=255)
       description = models.TextField()
       pdf = models.FileField(upload_to='documents/pdfs/')

       def __str__(self):
           return self.title