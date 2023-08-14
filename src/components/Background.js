import React from "react";
import MyPic from "./images/mypic_eldar2.png";

const Background = ({ setActiveTab }) => {
  return (
    <div
      className="hero-bg load-hidden"
      onClick={() => {
        setActiveTab(null);
      }}
    >
      <img src={MyPic} alt="profile" />
    </div>
  );
};

export default Background;
