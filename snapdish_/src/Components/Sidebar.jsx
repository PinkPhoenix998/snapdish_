import React from "react";
import { FaHome, FaStar, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link

const Sidebar = () => {
  return (
    <div style={{ width: "200px", background: "#A9C561", height: "100vh", paddingTop: "30px" }}>
      <ul style={{ listStyle: "none", padding: "0", color: "white" }}>
        <li style={{ padding: "20px", cursor: "pointer", display: "flex", alignItems: "center" }}>
          <FaHome style={{ marginRight: "10px" }} />
          <Link to="/home" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        </li>
        <li style={{ padding: "20px", cursor: "pointer", display: "flex", alignItems: "center" }}>
          <FaStar style={{ marginRight: "10px" }} />
          <Link to="/recommendation" style={{ color: "white", textDecoration: "none" }}>Recommendation</Link>
        </li>
        <li style={{ padding: "20px", cursor: "pointer", display: "flex", alignItems: "center" }}>
          <FaUsers style={{ marginRight: "10px" }} />
          <Link to="/community" style={{ color: "white", textDecoration: "none" }}>Community</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
