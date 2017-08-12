from django.conf.urls import url
from django.contrib import admin
from rest_framework.urlpatterns import format_suffix_patterns
from backend.startups import views as s_views
from backend.tags import views as t_views

from django.views.generic.base import TemplateView

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name='index.html')),
    url(r'^admin/', admin.site.urls),
    url(r'^startups/$', s_views.startup_list),
    url(r'^startups/(?P<pk>[0-9]+)$', s_views.startup_detail),
    url(r'^profile/', t_views.ProfileList.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
