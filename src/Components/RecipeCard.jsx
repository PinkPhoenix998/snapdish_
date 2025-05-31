import React from "react";

const RecipeCard = ({ title, desc, image }) => {
  return (
    <div
      style={{
        width: "220px", // Lebih kecil dari sebelumnya
        background: "#fff",
        borderRadius: "10px",
        padding: "10px",
        margin: "12px",
        boxShadow: "0 0 8px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "260px",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "90px",
          objectFit: "cover",
          borderRadius: "6px",
          marginBottom: "6px",
        }}
      />
      <h4 style={{ margin: "2px 0 4px", fontSize: "14px" }}>{title}</h4>
      <p
        style={{
          fontSize: "11px",
          color: "#666",
          marginBottom: "6px",
          lineHeight: "1.3",
          textAlign: "justify",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {desc}
      </p>
      <button
        style={{
          padding: "3px 8px",
          fontSize: "11px",
          backgroundColor: "#A6CE87",
          border: "none",
          color: "#fff",
          borderRadius: "5px",
          cursor: "pointer",
          alignSelf: "flex-start",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#7AA334")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#A6CE87")}
      >
        See Recipe
      </button>
    </div>
  );
};

export default RecipeCard;
