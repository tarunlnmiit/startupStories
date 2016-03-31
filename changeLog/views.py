from django.shortcuts import render

# Create your views here.


def changeLog(request):
    return render(request, 'changeLog/changeLog.html', {})
