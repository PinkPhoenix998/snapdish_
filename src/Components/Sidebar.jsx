import React from "react";
import { FaHome, FaStar, FaUsers } from "react-icons/fa"; 

const Sidebar = () => {
  return (
    <div style={{ width: "200px", background: "#A9C561", height: "100vh", paddingTop: "30px" }}>
      <ul style={{ listStyle: "none", padding: "0", color: "white" }}>
        <li style={{ padding: "20px", cursor: "pointer", display: "flex", alignItems: "center" }}>
          <FaHome style={{ marginRight: "10px" }} />
          Home
        </li>
        <li style={{ padding: "20px", cursor: "pointer", display: "flex", alignItems: "center" }}>
          <FaStar style={{ marginRight: "10px" }} />
          Recommendations
        </li>
        <li style={{ padding: "20px", cursor: "pointer", display: "flex", alignItems: "center" }}>
          <FaUsers style={{ marginRight: "10px" }} />
          Communitas
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
