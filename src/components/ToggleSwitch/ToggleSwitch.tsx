import React, { type JSX } from "react";
import "./ToggleSwitch.scss";

interface ToggleSwitchProps {
  firstButton:string,
  secondButton:string,
  handleClick:(selected:string)=>void,
  selected:string
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ selected = "text",firstButton='File',secondButton='File',handleClick}):JSX.Element => {
  return (
    <div className="toggle-container">
      <button
        className={`toggle-button ${selected === firstButton ? "active" : ""}`}
        onClick={() => handleClick(firstButton)}
      >
        {firstButton}
      </button>
      <button
        className={`toggle-button ${selected === secondButton ? "active" : ""}`}
        onClick={() => handleClick(secondButton)}
      >
        {secondButton}
      </button>
    </div>
  );
};

export default ToggleSwitch;
