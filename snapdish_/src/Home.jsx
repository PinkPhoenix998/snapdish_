import React from "react";
import Sidebar from "./Components/Sidebar";
import RecipeCard from "./Components/RecipeCard";
import CaesarSaladImg from "./assets/CaesarSalad.jpg";
import CarbonaraImg from "./assets/Carbonara.png";
import PizzaImg from "./assets/Pizza.jpg";
import BurgerImg from "./assets/Burger.jpg";
import TeriyakiImg from "./assets/Teriyaki.jpg"; 
import NasiGorengImg from "./assets/NasiGoreng.jpg";
import RamenImg from "./assets/Ramen.jpg";

const Home = () => {
  const userName = localStorage.getItem("userName") || "User";

  // Daftar resep yang telah diperbarui
  const recipes = [
    {
      title: "Caesar Salad",
      desc: "Classic mix of romaine lettuce, croutons, parmesan, and creamy dressing.",
      image: CaesarSaladImg,
    },
    {
      title: "Spaghetti Bolognese",
      desc: "Classic Italian pasta with rich tomato sauce and ground meat.",
      image: CarbonaraImg,
    },
    {
      title: "Margherita Pizza",
      desc: "Classic pizza topped with fresh tomatoes, mozzarella, and basil.",
      image: PizzaImg,
    },
    {
      title: "Cheeseburger",
      desc: "Juicy beef patty with melted cheese, lettuce, and tomato.",
      image: BurgerImg,
    },
    {
      title: "Chicken Teriyaki",
      desc: "Grilled chicken glazed with sweet and savory teriyaki sauce, served with rice.",
      image: TeriyakiImg,
    },
    {
      title: "Nasi Goreng🤤",
      desc: "Indonesian fried rice with egg, chicken, and special spices.",
      image: NasiGorengImg,
    },
    {
      title: "Tonkotsu Ramen",
      desc: "Japanese ramen with creamy pork broth, noodles, and toppings.",
      image: RamenImg,
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ padding: "30px", flex: 1, backgroundColor: "white", minHeight: "100vh" }}>
        <h2>Hi, {userName}!</h2>
        <p>Today's Recommendation For You</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} {...recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
