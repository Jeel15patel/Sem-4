from django.shortcuts import render
from django.http import HttpResponse
from .models import News

# Create your views here.
def news(request):
    newss = News.objects.all().order_by('-date')
    return render(request,'news.html',{"news":newss})