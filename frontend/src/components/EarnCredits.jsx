import React, { useState } from 'react';
import '../styles.css';

const EarnCredits = () => {
  const [treeImage, setTreeImage] = useState(null);
  const [walkImage, setWalkImage] = useState(null);
  const [applianceImage, setApplianceImage] = useState(null);
  const [status, setStatus] = useState("");

  // Function to handle file uploads
  const handleImageUpload = (event, activity) => {
    const file = event.target.files[0];
    if (file) {
      switch (activity) {
        case "tree":
          setTreeImage(file);
          break;
        case "walk":
          setWalkImage(file);
          break;
        case "appliance":
          setApplianceImage(file);
          break;
        default:
          break;
      }
      setStatus("Your submission is being reviewed. Credits will be awarded once verified by the admin.");
    }
  };

  return (
    <>
      <section id="credits-intro" className="credits-intro">
        <h2>Earn Carbon Credits</h2>
        <p>Participate in activities that help offset carbon emissions. Submit proof and earn credits after manual verification by the admin!</p>
      </section>

      <section id="credits-cards" className="credits-section">
        <div className="credits-cards">
          {/* Plant a Tree */}
          <div className="card">
            <h3>Plant a Tree 🌲</h3>
            <p>Support reforestation to offset emissions. Upload a photo of the tree you've planted and get credits after admin verification.</p>
            <div className="upload-section">
              <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, "tree")} />
              <button className="verify-btn" disabled>Verify & Add Credits (Admin Only)</button>
            </div>
            {treeImage && <p>Tree photo uploaded. Waiting for verification...</p>}
          </div>

          {/* Bike or Walk */}
          <div className="card">
            <h3>Bike or Walk 🚶</h3>
            <p>Cut down on emissions from vehicles. Upload a screenshot of your steps/bike activity and get credits after admin verification.</p>
            <div className="upload-section">
              <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, "walk")} />
              <button className="verify-btn" disabled>Verify & Add Credits (Admin Only)</button>
            </div>
            {walkImage && <p>Walk photo uploaded. Waiting for verification...</p>}
          </div>

          {/* Use Energy Efficient Appliances */}
          <div className="card">
            <h3>Use Energy Efficient Appliances ⚙️</h3>
            <p>Reduce energy usage at home and work. Upload a photo of your energy-efficient appliance and get credits after admin verification.</p>
            <div className="upload-section">
              <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, "appliance")} />
              <button className="verify-btn" disabled>Verify & Add Credits (Admin Only)</button>
            </div>
            {applianceImage && <p>Appliance photo uploaded. Waiting for verification...</p>}
          </div>
        </div>
      </section>

      <section id="credits-summary" className="credits-summary">
        <p>{status}</p>
      </section>
    </>
  );
};

export default EarnCredits;
