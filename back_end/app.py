#!/usr/bin/python3
#integration of files.
""" connecting my frontend to my database """

import MySQLdb
if __name__ == "__main__":
    #connection to the db
    db = MySQLdb.connect(host="100.25.129.60", port=3306, user="root", passwd="root", db="SILVERLINE_EXPRESS")

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
