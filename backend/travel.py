from flask import Blueprint, render_template, request, redirect, url_for
travel_bp = Blueprint('travel', __name__)

@travel_bp.route("/travel", methods=["GET", "POST"])
def travel():
    if request.method == "POST":
        footprint = 0
        flights = request.form.get("flights")
        car = request.form.get("car")
        ctype = request.form.get("ctype")
        engine = request.form.get("engine")
        service = request.form.get("servicing")
        public = request.form.get("public")

        footprint += 1.3*int(flights)  
        if ctype=="hashbach":      
            if engine=="gasoline":
                footprint += .17*int(car)
            elif engine=="diesel":
                footprint+=.12*int(car)
            elif engine=="electric":
                footprint+=.1


