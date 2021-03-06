"""startupStories URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
import about.views
import blog.views
import changeLog.views
import contact.views
import demo.views
import main.views


urlpatterns = [
    url(r'^about/', about.views.about, name='about'),
    url(r'^admin/', admin.site.urls, name='admin'),
    url(r'^blog/', include('blog.urls')),
    url(r'^change-log/', changeLog.views.changeLog, name='changeLog'),
    url(r'^contactUs/', contact.views.contact, name='contact'),
    url(r'^demo/', include('demo.urls')),
    url(r'^faqs/', about.views.faqs, name='faqs'),
    url(r'^$', main.views.home, name='home'),
    url(r'^home/', main.views.home, name='home'),
    url(r'^logout/', main.views.logout, name='logout'),
    url(r'^privacy-terms/', about.views.privacyTerms, name='privacy-terms'),
    url('', include('social.apps.django_app.urls', namespace='social')),
]
