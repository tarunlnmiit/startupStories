from django.shortcuts import render

# Create your views here.


def roadmap(request):
    return render(request, 'roadmap/roadmap.html', {})
