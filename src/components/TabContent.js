import React from "react";

const TabContent = ({ content, title }) => {
  return (
    <>
      <h2 className="tab-title">{title}</h2>
      <div>{content}</div>
    </>
  );
};

export default TabContent;
