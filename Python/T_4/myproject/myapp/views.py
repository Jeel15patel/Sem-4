from django.shortcuts import render
from django.http import HttpResponse

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
    return render(request, "home.html", {"homes": homes})

def room(request):
    return render(request, "room.html", {"rooms": rooms})