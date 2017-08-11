from django.conf.urls import url
from django.contrib import admin
from rest_framework.urlpatterns import format_suffix_patterns
from startups import views
from tags import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^startups/', views.StartupList.as_view()),
    url(r'profile/', views.ProfileList.as_view()),
]
