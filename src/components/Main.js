import React, { useState } from "react";
import Bio from "./Bio";
import Calendar from "./projects/Calendar";
import ECommerce from "./projects/ECommerce";
import SomeGame from "./projects/SomeGame";
import Sudoku from "./projects/Sudoku";
import Timer from "./projects/Timer";
import StraightLineIcon from "./icons/StraightLineIcon";
import Background from "./Background";
import SlantedLineIcon from "./icons/SlantedLineIcon";

const Main = ({ width }) => {
  const [activeTab, setActiveTab] = useState(null);
  const tabLabels = ["Sudoku", "Calendar", "Ecommerce", "Some game", "Timer"];
  const tabContents = [
    <Sudoku />,
    <Calendar />,
    <ECommerce />,
    <SomeGame />,
    <Timer />,
  ];

  return (
    <div className="main">
      <section className="tab-content">
        {activeTab === null ? (
          <div className={activeTab === null ? "active-content" : ""}>
            <h2>{"Hello"}</h2>
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
              <h2>{tabLabels[activeTab]}</h2>
              <p>{content}</p>
            </div>
          ))
        )}
      </section>

      <div className="tab-section">
        <StraightLineIcon
          stroke="#e4e4e4"
          width="150"
          viewBox="0 0 15000 810"
          strokeWidth="50"
          className="main-line-icon"
        />

        <h3>{"Projects"}</h3>
        {tabLabels.map((label, index) => (
          <ul key={index} className="tab-label">
            <li
              className={activeTab === index ? "active-link" : ""}
              onClick={() => {
                setActiveTab(index);
              }}
            >
              {label}
            </li>
          </ul>
        ))}
      </div>

      <Background setActiveTab={setActiveTab} />

      <SlantedLineIcon
        stroke="#e4e4e4"
        width={width && "100"}
        viewBox="0 0 1500 810"
        strokeWidth="10"
      />
    </div>
  );
};

export default Main;
