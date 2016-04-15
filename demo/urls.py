from django.conf.urls import url
import views


urlpatterns = [
    url(r'^$', views.entry_index, name='demo'),
    url(r'^demo/?page=', views.next_page, name='next'),
]
