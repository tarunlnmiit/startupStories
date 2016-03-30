from django.conf.urls import url
import views


urlpatterns = [
    url(r'^$', views.blog, name='blog'),
    url(r'^entry/', views.entry, name='entry'),
]
