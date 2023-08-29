from django.contrib import admin
from django.urls import path,include
from movie import views as movieViews
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include("movie.urls")),
    path('news/',include('news.urls')),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)