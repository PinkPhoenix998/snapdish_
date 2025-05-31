import React from "react";
import Sidebar from "../Components/Sidebar";
import RecipeCard from "../Components/RecipeCard";
import CaesarSaladImg from "./assets/CaesarSalad.jpg"; // <-- IMPORT gambar dulu

const Home = () => {
  const recipes = Array(8).fill({
    title: "Caesar Salad",
    desc: "Classic mix of romaine lettuce, croutons, parmesan, and creamy dressing.",
    image: CaesarSaladImg, // <-- Gunakan gambar hasil import
  });

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ padding: "30px", flex: 1, backgroundColor: "white", minHeight: "100vh" }}>
        <h2>Hi, Nagita!</h2>
        <p>Today's Recommendation For you</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} {...recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
