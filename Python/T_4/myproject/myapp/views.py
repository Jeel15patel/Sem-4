from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.

def home(request):
    return HttpResponse("Hello, Home!")

def room(request):
    return HttpResponse("Hello, Room!")