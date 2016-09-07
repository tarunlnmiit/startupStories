import MySQLdb

conn = MySQLdb.connect(host="localhost", user="root", passwd="pass",
                            db="startupStories")

cursor = conn.cursor()
query = "SELECT company_name FROM data"

cursor.execute(query)
data = cursor.fetchall()

for item in data:
    inp = 'long_desc_' + item[0]
    query = "UPDATE data SET long_desc='%s' WHERE company_name='%s'" %(inp, item[0])
    print query
    cursor.execute(query)

cursor.close()

conn.commit()
conn.close()
