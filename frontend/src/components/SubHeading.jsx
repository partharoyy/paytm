import React from "react";

const SubHeading = ({ label, color = "slate" }) => {
  return <div className={`text-${color}-500 text-md pt-1 px-4 pb-4`}>{label}</div>;
};

export default SubHeading;
