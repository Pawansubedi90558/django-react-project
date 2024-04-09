from django.contrib.auth.models import User
from rest_framework import serializers

#serializers are used to convert complex data types like querysets and model instances to native python data types that can then be easily rendered into JSON, XML or other content types.
class UserSerializer(serializers.ModelSerializer):
    #Meta class is used to define the model that the serializer is going to use
    class Meta:
        #model=User is the model that we are going to serialize
        model=User
        #fields is the list of fields that we want to serialize
        fields=["id","username","password"]
        #accept password while creating the user but we don't want to give it when we give information about the user
        
        #extra_kwargs is used to define the extra properties for the fields
        extra_kwargs={"password":{"write_only":True}}
    #create method is used to create the user
    def create(self,validated_data):
        user=User.objects.create_user(**validated_data)
        #returns the created user
        return user
    
