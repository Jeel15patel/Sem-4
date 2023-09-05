from django.contrib import admin
from django.urls import path, include
from movie import views as movieViews


urlpatterns = [
    path("", movieViews.home, name="home"),
    path("about/", movieViews.about),
    path("signup/", movieViews.signup, name="signup"),
    path("<int:movie_id>", movieViews.detail, name="detail"),
    path("<int:movie_id>/create", movieViews.createreview, name="createreview"),
]
