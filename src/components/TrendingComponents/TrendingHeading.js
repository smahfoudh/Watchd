import React from "react";

const TrendingHeading = (props) => {
  return (
    <div className="col trending-heading">
      <h1>{props.heading}</h1>
    </div>
  );
};

export default TrendingHeading;
