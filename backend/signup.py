from flask import Blueprint, render_template, request, redirect, url_for
import sqlite3

signup_bp = Blueprint('signup', __name__)

@signup_bp.route("/signup", methods=["GET", "POST"])
def signup():
    if request.method == "POST":
        
        uname = request.form.get("username")
        fname = request.form.get("first_name")
        lname = request.form.get("last_name")
        dob = request.form.get("dob")
        passwd = request.form.get("password")

        
        if not all([uname, fname, lname, dob, passwd]):
            return "All fields are required!", 400

        
        with sqlite3.connect('database.db') as conn:
            conn.execute('CREATE TABLE IF NOT EXISTS USERS (username TEXT PRIMARY KEY, firstname TEXT, lastname TEXT, dob DATE, password TEXT)')
            conn.execute('INSERT INTO USERS (username, firstname, lastname, dob, password) VALUES (?, ?, ?, ?, ?)',
                         (uname, fname, lname, dob, passwd))
            conn.commit()
        
        return redirect(url_for("signup.success"))

    return render_template("signup.html")

@signup_bp.route("/signup/success")
def success():
    return render_template("login.html", message="Signup successful!")

