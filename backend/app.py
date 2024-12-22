from flask import Flask, render_template
from login import login_bp
from signup import signup_bp

app = Flask(__name__)
app.register_blueprint(signup_bp)
app.register_blueprint(login_bp)

@app.route("/")
def home():
    return render_template("login.html")  # Home page with signup/login options

if __name__ == "__main__":
    app.run(debug=True)