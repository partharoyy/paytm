import React from "react";

const Heading = ({ label, color = "black" }) => {
  return <div className={`font-bold text-4xl pt-6 text-${color}`}>{label}</div>;
};

export default Heading;
