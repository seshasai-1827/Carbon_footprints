import sqlite3

from flask import Blueprint, redirect, render_template, request, url_for

login_bp = Blueprint('login', __name__)

@login_bp.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        uname = request.form.get("username")
        passwd = request.form.get("password")

        try:
            # Database operations
            with sqlite3.connect("database.db") as conn:
                cursor = conn.cursor()
                cursor.execute("SELECT password FROM USERS WHERE username = ?", (uname,))
                result = cursor.fetchone()

                if result and result[0] == passwd:
                    # Redirect to React app
                    return redirect("http://localhost:3000/")
                else:
                    return render_template("login.html", error="Invalid username or password!")
        except sqlite3.Error as e:
            return f"Database error: {e}", 500

    return render_template("login.html")