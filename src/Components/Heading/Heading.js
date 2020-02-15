import React from "react";
import headingCss from "./Heading.module.css"
const Heading = props => {
  return (
    <div className={headingCss.headingWrapper}>
      <h1 className={headingCss.heading}>{"FitBit 19 - The Smartest Watch"}</h1>
      <p>
        {
          "This is Smart Watch Template Which show the how to manipulated Javascript with CSS style. I hope All are Like this Watch."
        }
      </p>
    </div>
  );
};

export default Heading;
