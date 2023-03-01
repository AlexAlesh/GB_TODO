from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.



class User(AbstractUser):
    email = models.EmailField(max_length=64, unique=True)
    username = models.CharField(max_length=64)
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

