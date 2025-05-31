import React from "react";

const Post = ({ post }) => {
  return (
    <div
      style={{
        width: "220px",
        background: "#fff",
        borderRadius: "10px",
        padding: "15px",
        margin: "12px 0",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "250px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
      }}
      className="post-card"
    >
      {/* Gambar */}
      <img
        src={post.image}
        alt={post.title}
        style={{
          width: "100%",
          height: "160px", // tinggi tetap agar konsisten
          objectFit: "cover", // menjaga aspek rasio dan mengisi kontainer
          borderRadius: "8px",
          marginBottom: "12px",
        }}
      />

      {/* Judul */}
      <h4
        style={{
          margin: "4px 0",
          fontSize: "16px",
          fontWeight: "600",
          color: "#333",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        {post.title}
      </h4>

      {/* Penulis */}
      <span
        style={{
          fontSize: "12px",
          color: "#888",
          marginBottom: "10px",
          display: "block",
        }}
      >
        {post.author}
      </span>

      {/* Deskripsi */}
      <p
        style={{
          fontSize: "13px",
          color: "#666",
          marginBottom: "10px",
          lineHeight: "1.4",
          textAlign: "justify",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
        }}
      >
        {post.desc}
      </p>

      {/* Tombol Join */}
      <button
        style={{
          padding: "8px 16px",
          fontSize: "13px",
          backgroundColor: "#A6CE87",
          border: "none",
          color: "#fff",
          borderRadius: "5px",
          cursor: "pointer",
          alignSelf: "flex-start",
          transition: "background-color 0.3s ease",
        }}
        onClick={() => navigate(`/community/${post.slug}`)}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#8fbc8f")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#A6CE87")}
      >
        Join Conversation
      </button>
    </div>
  );
};

export default Post;
