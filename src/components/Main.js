import React, { useState } from "react";
import Bio from "./Bio";
import Tab from "./Tab";
import TabContent from "./TabContent";
import Calendar from "./projects/Calendar";
import ECommerce from "./projects/ECommerce";
import SomeGame from "./projects/SomeGame";
import Sudoku from "./projects/Sudoku";
import StraightLineIcon from "./icons/StraightLineIcon";
import Background from "./Background";
import SlantedLineIcon from "./icons/SlantedLineIcon";

const Main = ({
  width,
  activeTab,
  setActiveTab,
  showContent,
  setShowContent,
}) => {
  const tabLabels = ["Sudoku", "Calendar", "Some game", "E-commerce"];
  const tabContents = [<Sudoku />, <Calendar />, <SomeGame />, <ECommerce />];

  return (
    <div className="main">
      <div>
        {showContent && activeTab !== null && (
          <section className={`tab-body ${showContent && "active"}`}>
            <>
              <h2 className="content-title">{tabLabels[activeTab]}</h2>
              <div>{tabContents[activeTab]}</div>
            </>
          </section>
        )}

        {!showContent && (
          <section className={`tab-body bio ${!showContent && "active"}`}>
            <Bio width={width} />
          </section>
        )}
      </div>
      {/* {showContent ? (
        <section className="tab-body">
          <div>
            <h2 className="content-title">{tabLabels[activeTab]}</h2>
            <div>{tabContents[activeTab]}</div>
          </div>
        </section>
      ) : (
       
        <Bio width={width} />
      )} */}

      <div className="tab-section">
        <StraightLineIcon
          stroke="#e4e4e4"
          width="150"
          viewBox="0 0 15000 810"
          strokeWidth="50"
          className="main-line-icon"
        />

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

      <Background setActiveTab={setActiveTab} setShowContent={setShowContent} />
      <SlantedLineIcon
        stroke="#e4e4e4"
        width="180"
        viewBox="0 0 3000 810"
        strokeWidth="10"
      />
    </div>
  );
};

export default Main;
