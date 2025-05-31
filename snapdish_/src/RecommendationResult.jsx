// RecommendationResult.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Post from "./Components/Post";

const RecommendationResult = () => {
  const location = useLocation();
  const { diseases, isDieting, goals, customDisease, customGoal } = location.state || {};

  // Data dummy untuk resep-resep yang akan ditampilkan berdasarkan preferensi diet
  const recommendedRecipes = [
    {
      title: "Zucchini Noodles with Tomato Basil Sauce",
      desc: "Mi dari zucchini rendah karbohidrat dengan saus tomat segar. Cocok untuk penderita diabetes dan penurunan berat badan.",
      image: "https://www.eatingwell.com/thmb/ZRUcKPkoXnMZP01nvKElqtv2_K8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/zucchini-noodles-pasta-vegetarian-8d08d6636aa04fc7a84f3be7cdb3ad70.jpg",
      author: "Healthy Kitchen • 2025-04-23",
    },
    {
      title: "Grilled Salmon with Broccoli",
      desc: "Salmon panggang tinggi protein dan omega-3, disajikan dengan brokoli kukus rendah karbohidrat.",
      image: "https://www.saltandlavender.com/wp-content/uploads/2020/07/grilled-salmon-1.jpg",
      author: "Chef Leo • 2025-04-22",
    },
    {
      title: "Tofu & Veggie Stir-Fry (Low Sodium)",
      desc: "Tumis tahu dan sayuran tanpa MSG dan rendah garam. Cocok untuk diet dan penderita diabetes.",
      image: "https://www.wellplated.com/wp-content/uploads/2022/06/Tofu-Stir-Fry.jpg",
      author: "PlantPlate • 2025-04-21",
    },
    {
      title: "Chia Seed Pudding with Berries",
      desc: "Puding chia bebas gula dengan topping buah beri. Tinggi serat dan GI rendah.",
      image: "https://www.healthylittlefoodies.com/wp-content/uploads/Chia-Pudding-Feature.jpg",
      author: "NutriBowl • 2025-04-21",
    },
    {
      title: "Chicken Lettuce Wraps",
      desc: "Ayam cincang tanpa minyak berlebih dibungkus selada renyah. Lezat, rendah kalori, dan sehat.",
      image: "https://therealfoodrds.com/wp-content/uploads/2020/01/Asian_Chicken_Lettuce_Wraps-11.jpg",
      author: "LeanBites • 2025-04-20",
    },
    {
      title: "Oven-Baked Egg Muffins",
      desc: "Telur panggang dalam cetakan muffin dengan sayuran, tanpa minyak tambahan. Cocok untuk sarapan sehat.",
      image: "https://www.wellplated.com/wp-content/uploads/2020/11/Egg-Muffins-1.jpg",
      author: "FitMeals • 2025-04-20",
    },
    {
      title: "Avocado & Tuna Salad",
      desc: "Kombinasi alpukat dan tuna untuk lemak sehat dan protein tinggi. Tanpa dressing gula tambahan.",
      image: "https://healthyfitnessmeals.com/wp-content/uploads/2022/10/Avocado-Tuna-Salad-10.jpg",
      author: "FreshBite • 2025-04-19",
    },
    {
      title: "Cauliflower Rice Bowl",
      desc: "Pengganti nasi dari kembang kol yang lebih rendah karbohidrat, disajikan dengan ayam dan sayur.",
      image: "https://www.eatingbirdfood.com/wp-content/uploads/2022/01/cauliflower-rice-bowl.jpg",
      author: "LowCarb Chef • 2025-04-19",
    },
    {
      title: "Greek Yogurt Parfait (No Sugar)",
      desc: "Yogurt tinggi protein dengan buah beri dan granola bebas gula. Camilan sehat penuh rasa.",
      image: "https://www.slenderkitchen.com/sites/default/files/styles/500x500/public/recipe_images/greek-yogurt-parfait-5.jpg",
      author: "Wellness Lab • 2025-04-19",
    },
    {
      title: "Baked Herb Chicken Breast",
      desc: "Dada ayam panggang tanpa kulit dan lemak, dibumbui dengan rempah sehat.",
      image: "https://www.cookingclassy.com/wp-content/uploads/2021/03/baked-chicken-breast-16.jpg",
      author: "Herbivore Kitchen • 2025-04-18",
    },
    {
      title: "Steamed Tofu with Mushrooms",
      desc: "Tahu kukus dengan jamur shiitake dan saus rendah sodium. Tekstur lembut, ringan dan sehat.",
      image: "https://theplantbasedwok.com/wp-content/uploads/2020/02/steamed-tofu-featured-1.jpg",
      author: "Simple Fit Meals • 2025-04-18",
    },
    {
      title: "Vegetable Soup (No Cream)",
      desc: "Sup sayur bening kaya serat dan vitamin, tanpa krim atau susu tambahan.",
      image: "https://cookieandkate.com/images/2016/10/healthy-vegetable-soup-recipe-4-768x1154.jpg",
      author: "Heart Kitchen • 2025-04-17",
    },
    {
      title: "Egg White & Spinach Omelette",
      desc: "Omelet putih telur dengan bayam segar. Bebas kolesterol dan tinggi protein.",
      image: "https://www.aheadofthyme.com/wp-content/uploads/2022/10/spinach-omelette-3.jpg",
      author: "LightMeal Co • 2025-04-17",
    },
    {
      title: "Quinoa and Black Bean Salad",
      desc: "Salad quinoa dengan kacang hitam kaya protein nabati dan rendah indeks glikemik.",
      image: "https://www.eatingwell.com/thmb/KRHzZYwJRTUoFhWZf_b6AqB-7Bo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/quinoa-black-bean-salad-2x1-1-ccd7f36797d4433b9c26818c7a6093ff.jpg",
      author: "FiberFuel • 2025-04-16",
    }
  ];
  
  
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ padding: "30px", flex: 1, backgroundColor: "white", minHeight: "100vh" }}>
        <h2>Recommended Recipes for You</h2>
        <p>Based on your preferences:</p>
        <ul>
          <li>Diseases: {diseases.join(", ")}</li>
          <li>Dieting: {isDieting}</li>
          <li>Goals: {goals.join(", ")}</li>  
        </ul>

        {/* Displaying Recommended Recipes */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {recommendedRecipes.map((recipe, index) => (
            <Post key={index} post={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendationResult;
