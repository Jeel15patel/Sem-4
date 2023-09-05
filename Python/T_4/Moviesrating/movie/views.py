from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from .models import Movie, Review


# Create your views here.
def home(request):
    searchTerm = request.GET.get("searchMovie")
    if searchTerm:
        movies = Movie.objects.filter(title__icontains=searchTerm)
    else:
        movies = Movie.objects.all()
    return render(request, "home.html", {"searchTerm": searchTerm, "movies": movies})


def about(request):
    return render(request, "about.html")


def signup(request):
    email = request.GET.get("email")
    return render(request, "signup.html", {"email": email})


def detail(request, movie_id):
    movie = get_object_or_404(Movie, pk=movie_id)
    return render(request, "detail.html", {"movie": movie})


def createreview(request, movie_id):
    movie = get_object_or_404(Movie, pk=movie_id)
    if request.method == "GET":
        return render(request, "createreview.html", {"movie": movie})
    else:
        try:
            myreview = request.POST.get("myreview")
            newReview = Review()
            newReview.user = request.user
            newReview.movie = movie
            newReview.text = myreview
            newReview.save()
            return redirect("detail", newReview.movie.id)
        except ValueError:
            return render(
                request,
                "createreview.html",
                {"movie": movie, "error": "Bad data passed in. Try again."},
            )
