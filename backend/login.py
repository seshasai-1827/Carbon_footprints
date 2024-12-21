from flask import Blueprint, render_template, request, redirect, url_for
import sqlite3

login_bp = Blueprint('login', __name__)

@login_bp.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        uname = request.form.get("username")
        passwd = request.form.get("password")

        # Database operations
        with sqlite3.connect('database.db') as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT password FROM USERS WHERE username = ?", (uname,))
            result = cursor.fetchone()

            if result and result[0] == passwd:
                return redirect(url_for("login.success"))
            else:
                return "Invalid username or password!", 401

    return render_template("login.html")

@login_bp.route("/login/success")
def success():
    return render_template("index.html", message="Login successful!")
