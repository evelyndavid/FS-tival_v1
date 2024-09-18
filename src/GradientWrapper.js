// src/GradientWrapper.js
import React from "react";
import "./App.css";

const GradientWrapper = ({ children }) => {
  return (
    <div className="gradient-background">
      {children}
    </div>
  );
};

export default GradientWrapper;
