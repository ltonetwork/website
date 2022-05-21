import React from "react";
import Split from "../Split";

const BigTitle = ({title, subtitle, backTitle, paddingTop}) => {
  return (
    <div className={`sec-head custom-font text-center pt-${paddingTop}`}>
      <h6 className="wow fadeIn pt-50" data-wow-delay=".5s">
        {subtitle}
      </h6>
      <Split>
        <h3 className="wow words chars splitting" data-splitting>
          {title}
        </h3>
      </Split>
      <span className="tbg">{backTitle}</span>
    </div>
  );
}

export default BigTitle;