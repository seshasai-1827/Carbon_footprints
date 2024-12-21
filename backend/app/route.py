from flask import jsonify, request

from app import app


@app.route('/api/calculate', methods=['POST'])
def calculate_carbon():
    data = request.json
    travel_emission = data.get('travel', 0) * 0.2
    diet_emission = data.get('diet', 0) * 0.3
    energy_emission = data.get('energy', 0) * 0.5
    total_emission = travel_emission + diet_emission + energy_emission
    return jsonify({"total_emission": total_emission})
