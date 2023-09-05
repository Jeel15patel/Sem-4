from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate
from django.db import IntegrityError

# Create your views here.


def signupcount(request):
    if request.method == "GET":
        return render(request, "signupcount.html", {"form": UserCreationForm})
    else:
        if request.POST["password1"] == request.POST["password2"]:
            try:
                user = User.objects.create_user(
                    username=request.POST["username"],
                    password=request.POST["password1"],
                )
                user.save()
                login(request, user)
                return redirect("home")
            except IntegrityError:
                return render(
                    request,
                    "signupcount.html",
                    {"form": UserCreationForm, "error": "Username already taken"},
                )
        else:
            return render(
                request,
                "signupcount.html",
                {"form": UserCreationForm, "error": "Password didn't match"},
            )


def logoutaccount(request):
    logout(request)
    return redirect("home")


def loginaccount(request):
    if request.method == "GET":
        return render(request, "loginaccount.html", {"form": AuthenticationForm})

    else:
        User = authenticate(
            request,
            username=request.POST["username"],
            password=request.POST["password"],
        )
        if User is None:
            return render(
                request,
                "loginaccount.html",
                {
                    "form": AuthenticationForm,
                    "error": "Username and password didn't match",
                },
            )
        else:
            login(request, User)
            return redirect("home")
