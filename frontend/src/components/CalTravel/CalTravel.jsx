// CalTravel.jsx
import React, { useState } from 'react';
import './CalTravel.css';



const CalTravel = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [tripType, setTripType] = useState('one-way');
    const [accommodation, setAccommodation] = useState('hostel');
    const [nights, setNights] = useState(2);
    const [travellers, setTravellers] = useState(2);
    const [emissions, setEmissions] = useState(null);

    const calculateEmissions = (event) => {
        event.preventDefault();

        // Simple estimation logic for CO₂ emissions
        const distance = 8000; // Example distance in km (Patna to Hamburg)
        const emissionsPerKm = {
            plane: 0.15, // kg CO₂ per km per person
            car: 0.2,    // kg CO₂ per km per person
            train: 0.05   // kg CO₂ per km per person
        };

        // Assuming the user travels by plane for this example
        const mode = 'plane'; // You can modify this based on user input
        const totalEmissions = distance * emissionsPerKm[mode] * travellers;

        setEmissions(totalEmissions);
    };

    return (
        <div className="calculator">
            <h1 className="calculator-title">
    <span className="yellow">Travel</span> CO₂ <span className="yellow">Emission</span> Calculator</h1>

            <form onSubmit={calculateEmissions}>
                <label htmlFor="from">From</label>
                <input
                    type="text"
                    id="from"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    placeholder="Patna, India"
                    required
                />

                <label htmlFor ="to">To</label>
                <input
                    type="text"
                    id="to"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    placeholder="Bengaluru, India"
                    required
                />

                <label htmlFor="trip-type">Return or One-way</label>
                <select
                    id="trip-type"
                    value={tripType}
                    onChange={(e) => setTripType(e.target.value)}
                >
                    <option value="one-way">One-way</option>
                    <option value="return">Return</option>
                </select>

                <label htmlFor="accommodation">Accommodation</label>
                <select
                    id="accommodation"
                    value={accommodation}
                    onChange={(e) => setAccommodation(e.target.value)}
                >
                    <option value="hostel">Hostel</option>
                    <option value="hotel">Hotel</option>
                    <option value="airbnb">Airbnb</option>
                </select>

                <label htmlFor="nights">Nights</label>
                <input
                    type="number"
                    id="nights"
                    value={nights}
                    onChange={(e) => setNights(e.target.value)}
                    min="1"
                    required
                />

                <label htmlFor="travellers">Travellers</label>
                <input
                    type="number"
                    id="travellers"
                    value={travellers}
                    onChange={(e) => setTravellers(e.target.value)}
                    min="1"
                    required
                />

                <button type="submit">Calculate Emissions</button>
            </form>

            {emissions !== null && (
                <div id="results">
                    <h2>Calculation Results</h2>
                    <p>Estimated CO₂ Emissions: {emissions.toFixed(2)} kg</p>
                </div>
            )}
        </div>
    );
};

export default CalTravel;