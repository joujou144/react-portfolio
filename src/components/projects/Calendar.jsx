import React from "react";

const Calendar = () => {
  return (
    <div className="tab-content">
      <p>
        {
          "It is a sequence of Latin words that, as they are positioned, do not form sentences with a complete sense, but give life to a test text useful"
        }
        <br />
        <br />
        {
          " but give life to a test text useful to fill spaces that will subsequently be occupied from ."
        }
      </p>

      <div className="tab-content-links">
        <a
          href="https://github.com/joujou144"
          className="hover:border-b transition-all duration-100 ease py-2"
        >
          {"Github"}
        </a>
        <a
          href="https://github.com/joujou144"
          className="hover:border-b transition-all duration-100 ease py-2"
        >
          {"View demo"}
        </a>
      </div>
    </div>
  );
};

export default Calendar;
