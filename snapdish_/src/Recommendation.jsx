import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import './Recommendation.css';

const Recommendation = () => {
  const userName = localStorage.getItem("userName") || "User";
  const [diseases, setDiseases] = useState([]);
  const [isDieting, setIsDieting] = useState("");
  const [goals, setGoals] = useState([]);
  const [customDisease, setCustomDisease] = useState("");
  const [customGoal, setCustomGoal] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleCheckbox = (value, setter, currentState) => {
    setter(currentState.includes(value) ? currentState.filter(item => item !== value) : [...currentState, value]);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the result page and pass data via state
    navigate('/recommendation-result', {
      state: {
        diseases,
        isDieting,
        goals,
        customDisease,
        customGoal
      }
    });
  };

  return (
    <div className="container" style={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div style={{ padding: "30px", flex: 1, backgroundColor: "white", minHeight: "100vh" }}>
        <h2>Hi, {userName}!</h2>
        <p>Explore healthy meal recommendations🥕</p>

        {/* Main Form */}
        <div className="main-content">
          <form onSubmit={handleSubmit} className="form-body">

            {/* Upload Image */}
        <div className="upload-section">
            <label>
                <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
                {image ? (
                <img src={image} alt="Uploaded" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
                ) : (
                <div style={{ padding: '1rem', border: '2px dashed #ccc', textAlign: 'center', cursor: 'pointer' }}>
                <div style={{ fontSize: '2rem' }}>⬆️</div>
                <p>Upload Your Meal Here</p>
                </div>
                )}
            </label>
        </div>


            {/* Diseases */}
            <div className="form-section">
              <p className="form-title">Do you have any specific diseases?*</p>
              <div className="checkbox-group">
                {["Diabetes", "Hypertension", "Cholesterol", "None", "Others"].map((item) => (
                  <label key={item}>
                    <input
                      type="checkbox"
                      value={item}
                      checked={diseases.includes(item)}
                      onChange={() => handleCheckbox(item, setDiseases, diseases)}
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
              {diseases.includes("Others") && (
                <input
                  type="text"
                  placeholder="Specify your disease"
                  value={customDisease}
                  onChange={(e) => setCustomDisease(e.target.value)}
                  className="input-text"
                />
              )}
            </div>

            {/* Dieting */}
            <div className="form-section">
              <p className="form-title">Are you currently on a diet?*</p>
              <div className="radio-group">
                {["Yes", "No"].map((val) => (
                  <label key={val}>
                    <input
                      type="radio"
                      name="diet"
                      value={val}
                      checked={isDieting === val}
                      onChange={() => setIsDieting(val)}
                    />
                    <span>{val}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Goals */}
            <div className="form-section">
              <p className="form-title">What are your goals?*</p>
              <div className="checkbox-group">
                {["Lose weight", "Maintain stamina", "Increase muscle mass", "Others"].map((goal) => (
                  <button
                    key={goal}
                    type="button"
                    onClick={() => handleCheckbox(goal, setGoals, goals)}
                    className={`goals-button ${goals.includes(goal) ? "selected" : ""}`}
                  >
                    {goal}
                  </button>
                ))}
              </div>
              {goals.includes("Others") && (
                <input
                  type="text"
                  placeholder="Specify your goal"
                  value={customGoal}
                  onChange={(e) => setCustomGoal(e.target.value)}
                  className="input-text"
                />
              )}
            </div>

            {/* Submit */}
            <div className="text-center mt-auto">
              <button type="submit" className="submit-button">
                Get Recommendations
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
