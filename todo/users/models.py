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

    #def get_username(self):
    #    return self.email

#User._meta.get_field_by_name('email')[0]._unique=True

#class TodoEmail():

#    email = models.EmailField('email address', unique=True)
    
#    class Meta:
#        abstract = True
    

#class TodoUser(TodoEmail):
#    username = models.CharField(max_length=64)
#    first_name = models.CharField(max_length=64)
#    last_name = models.CharField(max_length=64)