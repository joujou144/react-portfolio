import React, { useState } from "react";
import Bio from "./Bio";
import Tab from "./Tab";
import TabContent from "./TabContent";
import Calendar from "./projects/Calendar";
import ECommerce from "./projects/ECommerce";
import SomeGame from "./projects/SomeGame";
import Sudoku from "./projects/Sudoku";
import StraightLineIcon from "./icons/StraightLineIcon";

const Main = ({ showContent, setShowContent, width }) => {
  const tabLabels = ["Sudoku", "Calendar", "Some game", "E-commerce"];
  const tabContents = [<Sudoku />, <Calendar />, <SomeGame />, <ECommerce />];
  const [activeTab, setActiveTab] = useState(null);
  return (
    <section className="main">
      <div
        className="photo-container"
        onClick={() => setShowContent(false)}
      ></div>

      <div className="tab-container">
        {showContent ? (
          <div className={`${tabLabels[activeTab] ? "block" : "hidden"}`}>
            <TabContent
              content={tabContents[activeTab]}
              title={tabLabels[activeTab]}
            />
          </div>
        ) : (
          <Bio width={width} />
        )}

        <div className="straight-icon">
          <StraightLineIcon
            width="255"
            height="20"
            viewBox="0 0 15000 810"
            strokeWidth="20"
          />
        </div>

        <div>
          <h2>{"Projects"}</h2>
          {tabLabels.map((label, index) => (
            <ul key={index} className="tab-label">
              <Tab
                label={label}
                onClick={() => {
                  setActiveTab(index);
                  setShowContent(true);
                }}
                className={activeTab === index ? "active-link" : ""}
              />
            </ul>
          ))}
        </div>
      </div>

      <div
        className="photo-container"
        onClick={() => setShowContent(false)}
      ></div>
    </section>
  );
};

export default Main;
