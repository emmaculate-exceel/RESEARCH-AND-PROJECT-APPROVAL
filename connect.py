#!/usr/bin/python3
# creating a CRUD operation using sqlalchemy

import os
import sys
import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from flask import Flask , render_template, request, redirect, url_for, flash, session
from sqlalchemy import create_engine, Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

user = os.getenv("DB_USER")
passwd = os.getenv("DB_PASSWORD")
""" setting up my database for CRUD operation using python """
engine = create_engine(f"mysql://{user}:{passwd}@100.25.129.60:3306/SILVERLINE_EXPRESS")

app = Flask(__name__, static_folder="silverline_static" , template_folder = "silverline_templates")
app.secret_key = "emmanuel"
if engine:
    print("connected to the database !!!")
    
# creating a session for the database
Base = declarative_base()
Session = sessionmaker(bind=engine)
session_db = Session()

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
    CREATED = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)
    PASSWORD_HASH = (Column(String(255), nullable=False))
    PHONE = Column(String(15), nullable=False)

Base.metadata.create_all(engine)
# get user details and user_requests details for the creating of datas
@app.route("/")
def home():
    return render_template("index.html")

@app.route('/signup')
def form():
    return render_template('signup.html')

@app.route('/signup', methods=['POST'])
def user_signup():
    # automating users data's for the database """
    try:
        user_name = request.form["user_name"]
        user_lastname = request.form["user_lastname"]
        user_email = request.form["user_email"]
        password = request.form["user_password"]; user_password = generate_password_hash(password) 
        user_phone = request.form["user_phone"]

        session = Session()
        new_user = SILVERLINE_USERS(NAME=user_name, LASTNAME=user_lastname, EMAIL=user_email, PASSWORD_HASH=user_password, PHONE=user_phone)
        session_db.add(new_user)
        session_db.commit()
        session_db.close()
        return "<h1 style='text-align:center';>User Account Created Successfully!!!</h1>"
    except Exception as e:
    # Rollback changes
        session_db.rollback()
        return str(e)
    finally:
    # Close Session
        session_db.close()

@app.route('/login', methods=["POST"])
def login_form():
    return render_template('signup.html')

@app.route('/login', methods=["POST"])
def login():
    try:
        email = request.form["login_email"]
        password = request.form["login_password"]

        session_db = Session()
        user = session_db.query(SILVERLINE_USERS).filter_by(EMAIL=email).first()
        
        if user and check_password_hash(user.PASSWORD_HASH, password):
            session['user_id'] = user.ID
            session['user_name'] = user.NAME
            flash ('Login successful!!', "success")
            return render_template("/dashboard.html")
        else:
            flash("Invalid email or password", "danger")
            return render_template('/signup.html')
        
    except Exception as e:
        return str(e)
    finally:
        session_db.close()
        
###sign out lines for the page ::
@app.route('/signup')
def logout():
    session.pop("user_id", None)
    session.pop("user_name", None)
    flash("You have been logged out", "success")
    return render_template('/signup.html')

## protecting routes that required authentication
def login_required(f):
    @wraps(f)
    def decor_func(*args, **kwargs):
        if "user_id" not in session:
            flash("You need to login first.", "danger")
            return render_template('/signup.html')
        return f(*args, **kwargs)
    return decor_func

####
######login page
@app.route("/dashboard")
@login_required
def dashboard():
    return render_template("dashboard.html")

#handling client booking 
@app.route('/booking', methods=['POST'])
def booking():
    try:
    # automating user requests for the database """
        request_name = request.form["request_name"]
        request_lastname = request.form["request_lastname"]
        request_email = request.form["request_email"]
        request_phone = request.form["request_phone"]
        request_departure = request.form["request_departure"]
        request_arrival = request.form["request_arrival"]

        session = Session()
        new_request = SILVERLINE_REQUESTS(NAME=request_name, LASTNAME=request_lastname, EMAIL=request_email, PHONE=request_phone, DEPARTURE=request_departure, ARRIVAL=request_arrival)
    
        session.add(new_request)
        session.commit()
        session.close()
        return "Request Generated Successfully!!!"
    except Exception as e:
    # Rollback changes if there's any issues
        session.rollback()
        return str(e)
    finally:
        session.close()
