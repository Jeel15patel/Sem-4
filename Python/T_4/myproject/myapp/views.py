from django.shortcuts import render
from django.http import HttpResponse
from .models import Movies

# Create your views here.

homes = [
    { "id": 1, "name": "Home 1"},
    { "id": 2, "name": "Home 2"},
    { "id": 3, "name": "Home 3"},
]

rooms = [
    { "id": 1, "name": "Room 1"},
    { "id": 2, "name": "Room 2"},
    { "id": 3, "name": "Room 3"},
]

def home(request):
    searchhere = request.GET.get("searchmovies")
    movies = Movies.objects.all()
    return render(request, "home.html", {"homes": homes, "movies": movies, "searchhere": searchhere})

def room(request):
    return render(request, "room.html", {"rooms": rooms})