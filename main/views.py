from django.shortcuts import render
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


def home(request):
    companies = {
        'data': data,
    }
    return render(request, 'main/index.html', companies)
