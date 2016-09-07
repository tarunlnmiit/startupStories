from django.contrib.auth import logout as auth_logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import render_to_response, redirect, render
from django.template import RequestContext
import MySQLdb
# Create your views here.

conn = MySQLdb.connect(host="localhost", user="root", passwd="pass",
                            db="startupStories")

cursor = conn.cursor()
query = "SELECT * FROM data"

cursor.execute(query)
data = cursor.fetchall()

cursor.close()

conn.commit()
conn.close()


def home(request, template='main/index.html', page_template='main/cards.html'):
    companies = {
        'data': data,
        'page_template': page_template,
    }
    if request.is_ajax():
        template = page_template
    return render_to_response(template, companies,
                              context_instance=RequestContext(request))


def login(request):
    # context = RequestContext(request, {
    #     'request': request, 'user': request.user})
    # return render_to_response('login.html', context_instance=context)
    return render(request, 'main/index.html', {})


def logout(request):
    auth_logout(request)
    return redirect('home')
