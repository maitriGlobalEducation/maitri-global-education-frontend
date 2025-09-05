// components/GoldButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const GoldButton = ({
  text,
  to,
  borderColor = "white",
  textColor = "white",
  hoverBg = "white",
  hoverText = "black",
}) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className={`border-2 rounded-md px-6 py-2 font-medium transition-all duration-300 hover:cursor-pointer`}
      style={{
        borderColor: borderColor,
        color: textColor,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverBg;
        e.currentTarget.style.color = hoverText;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.color = textColor;
      }}
    >
      {text}
    </button>
  );
};

export default GoldButton;
