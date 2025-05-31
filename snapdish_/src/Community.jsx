// Community.jsx
import React from "react";
import Sidebar from "./Components/Sidebar";
import Post from "./Components/Post";
import { communityPosts } from "./Components/CommunityPosts"; // Impor data posts

const Community = () => {
  const userName = localStorage.getItem("userName") || "User";

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ padding: "30px", flex: 1, backgroundColor: "white", minHeight: "100vh" }}>
        <h2>Hi, {userName}!</h2>
        <p>Explore what others are cooking🔥</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {communityPosts.map((post, index) => (
            <Post key={index} post={post} /> // Panggil Post component untuk setiap post
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
