from django.conf.urls import url
from django.contrib import admin
from rest_framework.urlpatterns import format_suffix_patterns
from backend.startups import views as s_views
from backend.tags import views as t_views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^startups/', s_views.StartupList.as_view()),
    url(r'^profile/', t_views.ProfileList.as_view()),
]
