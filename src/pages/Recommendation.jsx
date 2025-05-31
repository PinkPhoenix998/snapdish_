import React, { useState } from "react";

const Recommendation = () => {
  const [diseases, setDiseases] = useState([]);
  const [isDieting, setIsDieting] = useState("");
  const [goals, setGoals] = useState([]);
  const [customDisease, setCustomDisease] = useState("");
  const [customGoal, setCustomGoal] = useState("");
  const [image, setImage] = useState(null);

  const handleCheckbox = (value, stateSetter, currentState) => {
    if (currentState.includes(value)) {
      stateSetter(currentState.filter((item) => item !== value));
    } else {
      stateSetter([...currentState, value]);
    }
  };

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      diseases,
      isDieting,
      goals,
      customDisease,
      customGoal,
    });
  };

  return (
    <>
      <div className="recommendation-container">
        <h1 className="recommendation-title">Recommendation Menu</h1>

        <div className="upload-box">
          <label className="upload-label">
            <input type="file" onChange={handleImageUpload} className="hidden" />
            {image ? (
              <img src={image} alt="Uploaded" className="upload-preview" />
            ) : (
              <div className="text-center text-gray-500">
                <div className="text-xl">⬆️</div>
                <p>Upload Picture</p>
              </div>
            )}
          </label>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-card">
            <p className="font-medium mb-2">Apakah Anda memiliki penyakit tertentu?*</p>
            <div className="flex flex-wrap gap-4 mb-2">
              {["Diabetes", "Hipertensi", "Kolestrol", "Tidak Ada", "Lainnya"].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={item}
                    checked={diseases.includes(item)}
                    onChange={() => handleCheckbox(item, setDiseases, diseases)}
                    className="accent-pink-300"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
            {diseases.includes("Lainnya") && (
              <input
                type="text"
                placeholder="Tuliskan penyakit Anda"
                className="w-full p-2 border rounded-md bg-pink-100"
                value={customDisease}
                onChange={(e) => setCustomDisease(e.target.value)}
              />
            )}
          </div>

          <div className="form-card">
            <p className="font-medium mb-2">Apakah Anda sedang diet?*</p>
            <div className="flex gap-4">
              {["Ya", "Tidak"].map((val) => (
                <label key={val} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="diet"
                    value={val}
                    checked={isDieting === val}
                    onChange={() => setIsDieting(val)}
                    className="accent-pink-300"
                  />
                  <span>{val}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-card">
            <p className="font-medium mb-2">Tujuan*</p>
            <div className="flex flex-wrap gap-3 mb-2">
              {["Menurunkan berat badan", "Menjaga Stamina", "Menambah massa otot", "Lainnya"].map((goal) => (
                <button
                  key={goal}
                  type="button"
                  onClick={() => handleCheckbox(goal, setGoals, goals)}
                  className={`goal-button ${
                    goals.includes(goal) ? "active" : "inactive"
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
            {goals.includes("Lainnya") && (
              <input
                type="text"
                placeholder="Tuliskan tujuan Anda disini"
                className="w-full p-2 border rounded-md bg-pink-100"
                value={customGoal}
                onChange={(e) => setCustomGoal(e.target.value)}
              />
            )}
          </div>

          <div className="text-center">
            <button type="submit" className="submit-button">
              Cari Rekomendasi
            </button>
          </div>
        </form>
      </div>

      <style>
        {`
        .recommendation-container {
          padding: 2rem;
          background-color: #f2f7e8;
          min-height: 100vh;
        }

        .recommendation-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .upload-box {
          background-color: #ecf1d8;
          padding: 1rem;
          border-radius: 1rem;
          margin-bottom: 1.5rem;
          height: 12rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .upload-preview {
          height: 8rem;
          object-fit: cover;
          border-radius: 0.75rem;
        }

        .form-card {
          background-color: white;
          padding: 1rem;
          border-radius: 0.75rem;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }

        .goal-button {
          padding: 0.5rem 1rem;
          border-radius: 999px;
          font-size: 0.875rem;
          cursor: pointer;
          border: none;
        }

        .goal-button.active {
          background-color: #f9a8d4;
          color: white;
        }

        .goal-button.inactive {
          background-color: #fce7f3;
          color: black;
        }

        .submit-button {
          background-color: #fbcfe8;
          color: black;
          padding: 0.5rem 1.5rem;
          border-radius: 0.5rem;
          border: none;
          transition: background 0.3s ease;
        }

        .submit-button:hover {
          background-color: #f9a8d4;
        }
        `}
      </style>
    </>
  );
};

export default Recommendation;
