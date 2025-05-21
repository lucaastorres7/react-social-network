import React from "react";

const Error = ({ error }) => {
  if (!error) return null;
  return <p className="text-[#f31] my-[1rem]">{error}</p>;
};

export default Error;
