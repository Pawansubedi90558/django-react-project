from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Note(models.Model):
    title=models.CharField(max_length=100)
    content=models.TextField()
    created_at=models.DateTimeField(auto_now_add=True)
    #on_delete=models.CASCADE means that if the user is deleted, all notes associated with that user will also be deleted
    #related_name="notes" is used to access all notes associated with a user
    author=models.ForeignKey(User,on_delete=models.CASCADE,related_name="notes")

    def __str__(self):
        return self.title