from django.shortcuts import render_to_response
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
