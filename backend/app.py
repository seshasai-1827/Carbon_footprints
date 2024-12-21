from flask import Flask, redirect, url_for, render_template, request
import sqlite3

app = Flask(__name__)
app.debug = True

# Initialize the database and create the USERS table if it doesn't exist
def init_db():
    with sqlite3.connect('database.db') as conn:
        conn.execute('CREATE TABLE IF NOT EXISTS USERS (username TEXT, password TEXT)')
        # Insert a default user for testing
        conn.execute('INSERT OR IGNORE INTO USERS (username, password) VALUES (?, ?)', ('SAI', 'WOW'))
        conn.commit()

init_db()

@app.route('/')
def index():
    # Login page
    return render_template("login.html")

@app.route('/success')
def success():
    # Success page after login
    return render_template("index.html")

@app.route("/login", methods=["POST", "GET"])
def login():
    if request.method == "POST":
        uname = request.form.get("username")  # Safely get the username
        passwd = request.form.get("password")  # Safely get the password

        if not uname or not passwd:
            print("Debug: Missing username or password")
            return redirect(url_for("index"))

        with sqlite3.connect("database.db") as users:
            cursor = users.cursor()
            try:
                # Query the database
                query = "SELECT password FROM USERS WHERE username = ?"
                print(f"Debug: Executing query: {query} with parameter {uname}")
                cursor.execute(query, (uname,))
                result = cursor.fetchone()
                print(f"Debug: Query result: {result}")

                # Check if the password matches
                if result and result[0] == passwd:
                    return redirect(url_for("success"))
                else:
                    print("Debug: Invalid username or password")
            except sqlite3.Error as e:
                print(f"Debug: Database error: {e}")
    
    # Redirect to the login page on failure
    return redirect(url_for("index"))

if __name__ == '__main__':
    app.run(debug=True)

