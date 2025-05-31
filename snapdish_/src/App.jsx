// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import Recommendation from './Recommendation';
import RecommendationResult from './RecommendationResult';
import Community from './Community';
import RecipeDetail from './RecipeDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/recommendation-result" element={<RecommendationResult />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/:slug" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
