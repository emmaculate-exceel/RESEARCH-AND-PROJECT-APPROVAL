#!/usr/bin/python3
# creating a CRUD operation using sqlalchemy

import os
import sys
import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from flask import Flask , render_template, request
from sqlalchemy import create_engine, Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

user = os.getenv("DB_USER")
password = os.getenv("DB_PASSWORD")
""" setting up my database for CRUD operation using python """
engine = create_engine(f"mysql://{user}:{password}@100.25.129.60:3306/SILVERLINE_EXPRESS")

app = Flask(__name__)

if engine:
    print("connected to the database !!!")
    
# creating a session for the database
Base = declarative_base()
Session = sessionmaker(bind=engine)
session = Session()

# CREATING USERS / REQUESTS table for the DATABASE

class SILVERLINE_REQUESTS(Base):
    """ Creating requests for the users """
    __tablename__ = 'SILVERLINE_REQUESTS'
    ID = Column(Integer, primary_key=True, autoincrement=True)
    NAME = Column(String(20), nullable=False)
    LASTNAME = Column(String(20), nullable=False)
    EMAIL = Column(String(30), nullable=False)
    PHONE = Column(String(15), nullable=False)
    TIME = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)
    DEPARTURE = Column(String(15), nullable=False)
    ARRIVAL = Column(String(15), nullable=False)
    

class SILVERLINE_USERS(Base):
    """ creating users for the database """
    __tablename__ = "SILVERLINE_USERS"
    ID = Column(Integer, primary_key=True, autoincrement=True)
    NAME = Column(String(20), nullable=False)
    LASTNAME = Column(String(20), nullable=False)
    EMAIL = Column(String(30), nullable=False)
    CREATED = Column(DateTime, default=datetime.datetime.utcnow(), onupdate=datetime.datetime.utcnow())
    PASSWORD_HASH = generate_password_hash(Column(String(255), nullable=False))
    PHONE = Column(String(15), nullable=False)

Base.metadata.create_all(engine)
# get user details and user_requests details for the creating of datas
@app.route("/")
def form():
    return render_template("form.html")

@app.route('/login', methods=['POST'])
# automating users data's for the database """ 
def add_user():
    user_name = request.form["user_name"]
    user_lastname = request.form["user_lastname"]
    user_email = request.form["user_email"]
    password = request.form["user_password"]; user_password = generate_password_hash(password) 
    user_phone = request.form["user_phone"]

    # automating user requests for the database """

    request_name = request.form["request_name"]
    request_lastname = request.form["request_lastname"]
    request_email = request.form["request_email"]
    request_phone = request.form["request_phone"]
    request_departure = request.form["request_departure"]
    request_arrival = request.form["request_arrival"]

    session = Session()
    try:
        new_user = SILVERLINE_USERS(NAME=user_name, LASTNAME=user_lastname, EMAIL=user_email, PASSWORD_HASH=user_password, PHONE=user_phone)
        new_request = SILVERLINE_REQUESTS(NAME=request_name, LASTNAME=request_lastname, EMAIL=request_email, PHONE=request_phone, DEPARTURE=request_departure, ARRIVAL=request_arrival)
    
        session.add(new_request)
        session.add(new_user)
        session.commit()
    except Exception as e:
        session.rollback()
        return(e)
    finally:
        session.close()
    return "Added Sucessfully"
