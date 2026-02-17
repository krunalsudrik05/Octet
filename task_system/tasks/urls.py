from django.urls import path

from .views import *

urlpatterns = [

path("prioritize", prioritize_tasks),
path("validate", validate_tasks),
path("health", health),

]
