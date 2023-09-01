from django.contrib import admin
from django.urls import path
from accounts import views

urlpatterns = [
    path("signupcount/", views.signupcount, name="signupcount"),
]
