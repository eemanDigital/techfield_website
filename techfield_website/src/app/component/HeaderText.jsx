import React from "react";

const HeaderText = ({ textOne, textTwo, textThree = "" }) => {
  return (
    <>
      <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
        {textOne}{" "}
        <span className="font-serif italic text-[#990100]">{textTwo}</span>{" "}
        {textThree}
      </h1>
    </>
  );
};

export default HeaderText;
