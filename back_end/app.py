#!/usr/bin/python3
#integration of files.
""" connecting my frontend to my database """
import os
import MySQLdb
from urllib.parse import quote_plus
if __name__ == "__main__":
    #connection to the db
    user = os.getenv("DB_USER")
    paswd = os.getenv("DB_PASSWORD")

    db = MySQLdb.connect(host="100.25.129.60", port=3306, user=user, passwd=paswd, database="RECOVER_YOUR_DATA")

    #check if connected
    if db:
        print("connected!!!")

    cursor = db.cursor()
    cursor.execute("SHOW DATABASES")
    database = cursor.fetchall()
    for rows in database:
        print(rows)
    
    cursor.close()
    db.close()
