import React from "react";
import "./DarkModeToggle.css";
import { assets } from "../../assets/assets";

function DarkModeToggle({ theme, setTheme }) {
  const toggle_mode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div
      onClick={() => {
        toggle_mode();
      }}
      className="dark-toggle-container"
    >
      <img src={theme == "light" ? assets.moon_logo : assets.sun_logo} alt="" />
    </div>
  );
}

export default DarkModeToggle;
