// RecipeDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { communityPosts } from "./Components/CommunityPosts";

const RecipeDetail = () => {
  const { slug } = useParams();  // Ambil slug dari URL
  const navigate = useNavigate();

  // Temukan post berdasarkan slug
  const recipe = communityPosts.find((post) => post.slug === slug);

  if (!recipe) {
    return (
      <div style={{ padding: "30px" }}>
        <h2>Resep tidak ditemukan</h2>
        <button onClick={() => navigate("/community")}>Kembali ke Community</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "30px", maxWidth: "800px", margin: "auto" }}>
      <img
        src={recipe.image}
        alt={recipe.title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />
      <h2>{recipe.title}</h2>
      <p style={{ color: "#888", fontSize: "14px", marginBottom: "10px" }}>{recipe.author}</p>
      <p style={{ fontSize: "16px", lineHeight: "1.6", textAlign: "justify" }}>{recipe.desc}</p>

      <button
        onClick={() => navigate("/community")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#A6CE87",
          border: "none",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Kembali ke Community
      </button>
    </div>
  );
};

export default RecipeDetail;
