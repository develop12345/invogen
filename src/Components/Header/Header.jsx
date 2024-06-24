import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
 
  return (
    <div className="d-print-none">
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/template")}>Template</button>
    </div>
  );
};

export default Header;
