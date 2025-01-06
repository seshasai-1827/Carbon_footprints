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
        

        footprint += 1.3*int(flights)  
        if ctype=="hashbach":      
            if engine=="gasoline":
                footprint += .17*int(car)
            elif engine=="diesel":
                footprint += .12*int(car)
            elif engine=="electric":
                footprint += .09072*int(car)
        elif ctype=="sedan":
            if engine=="gasoline":
                footprint += .2*int(car)
            elif engine=="diesel":
                footprint+=.16*int(car)
            elif engine=="electric":
                footprint+=.0469*int(car)
        elif ctype=="suv":
            if engine=="gasoline":
                footprint += .25*int(car)
            elif engine=="diesel":
                footprint+=.21*int(car)
            elif engine=="electric":
                footprint+=.0714*int(car)
        if service=="no":
            footprint *=1.15
        footprint_travel(footprint)
def footprint_travel(f):
        if f > 1500:
            message = f"You are consuming {f - 1500} Kgs of carbon more than the average person"
        else:
            message = f"You are consuming {1500 - f} Kgs of carbon less than the average person"
        
        return render_template("travel.html", footprint=f, message=message)
        
    



