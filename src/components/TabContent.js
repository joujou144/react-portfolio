import React from "react";

const TabContent = ({ content, title }) => {
  return (
    <>
      <h2 className="tab-title">{title}</h2>
      <div className="tab-content">{content}</div>
    </>
  );
};

export default TabContent;
