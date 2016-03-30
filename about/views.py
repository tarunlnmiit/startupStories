from django.shortcuts import render

# Create your views here.


def about(request):
    return render(request, 'about/about.html', {})


def privacyTerms(request):
    return render(request, 'about/privacyTerms.html', {})


def faqs(request):
    return render(request, 'about/faqs.html', {})
