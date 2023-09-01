import React from "react";
import Bio from "./Bio";
import Calendar from "./projects/Calendar";
import ECommerce from "./projects/ECommerce";
import SomeGame from "./projects/SomeGame";
import Sudoku from "./projects/Sudoku";
import Timer from "./projects/Timer";
import Profile from "./images/mypic-bnw.png";
import Gif from "./images/grid.gif";
import VerticalLineIcon from "./icons/VerticalLineIcon";

const Main = ({ width, activeTab, setActiveTab }) => {
  const tabLabels = ["Timer", "Sudoku", "Calendar", "Ecommerce", "Some game"];
  const tabContents = [
    <Timer />,
    <Sudoku />,
    <Calendar />,
    <ECommerce />,
    <SomeGame />,
  ];

  console.log(width);

  return (
    <div className="main">
      <section className="hero">
        <img src={Profile} className="profile" alt="profile" />
        <img src={Gif} alt="gif" className="gif" />
      </section>

      <section className="tab-content">
        {activeTab === null ? (
          <div className={activeTab === null ? "active-content" : ""}>
            <h3>{"FRONTEND | CREATIVE DEV"}</h3>
            <p>
              <Bio />
            </p>
          </div>
        ) : (
          tabContents.map((content, index) => (
            <div
              key={index}
              className={activeTab === index ? "active-content" : ""}
            >
              <h3>{tabLabels[activeTab]}</h3>
              <div>{content}</div>
            </div>
          ))
        )}
      </section>

      <section className="tab-section">
        <VerticalLineIcon
          className="tab-line line-icon"
          viewBox="0 0 800 800"
          width="400"
          height="400"
        />
        <h3>{"Projects"}</h3>
        <ul>
          {tabLabels.map((label, index) => (
            <li
              key={index}
              className={activeTab === index ? "active-link" : ""}
              onClick={() => {
                setActiveTab(index);
              }}
            >
              {label}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Main;
