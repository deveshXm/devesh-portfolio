import React from "react";
import Card from "./Card/Card.js";

function Project() {
  const projects = [
    {
      id: "p1",
      heading: "Matinee",
      time: "May-June 2022",
      info: "Matinee is a movie watching platform which also recommends movie to user based on last watch",
      language: "TailwindCSS NextJs Python FastApi",
      link: "https://github.com/deveshXm/Flood-Prediction",
    },
    {
      id: "p2",
      heading: "Flood Detection",
      time: "April 2022",
      info: "Prediction flood chances in an area using Linear Regression",
      language: "Python",
      link: "https://github.com/deveshXm/matinee",
    },
  ];
  return (
    <div className=" relative flex justify-center bg-black md:py-14 py-28 overflow-x-hidden overflow-y-hidden">
      <div className="absolute text-white text-opacity-20 text-[20vw] font-sans font-bold -translate-y-28">
        <p>WORK</p>
      </div>
      <div className="relative max-w-[90%] md:max-w-[60%] w-[90%] md:mt-40 text-white ">
        <div className=" py-10  flex justify-center">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Project;
