from django.contrib import admin
from django.urls import path, include
from movie import views

urlpatterns = [
    path("news/", views.news, name="news"),
]
