from django.shortcuts import render
from django.http import HttpResponse
from .models import Movies


# Create your views here.
def home(request):
    searchTerm = request.GET.get("searchMovie")
    if searchTerm:
        movies = Movies.objects.filter(title__icontains=searchTerm)
    else:
        movies = Movies.objects.all()
    return render(request, "home.html", {"searchTerm": searchTerm, "movies": movies})


def about(request):
    return render(request, "about.html")


def signup(request):
    email = request.GET.get("email")
    return render(request, "signup.html", {"email": email})
