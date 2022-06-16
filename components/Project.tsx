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
      link: "https://github.com/deveshXm/matinee",
    },
    {
      id: "p2",
      heading: "Flood Detection",
      time: "April 2022",
      info: "Prediction flood chances in an area using Linear Regression",
      language: "Python",
      link: "https://github.com/deveshXm/Flood-Prediction",
    },
  ];
  return (
    <div className=" relative flex justify-center bg-black md:py-14 py-28 overflow-x-hidden overflow-y-hidden">
      <div className="absolute text-[#202020] text-[20vw] font-sans font-bold -translate-y-28">
        <p>WORK</p>
      </div>
      <div className="relative max-w-[90%] md:max-w-[70%] w-[90%] md:mt-40 text-white 2xl:py-96 sm:py-24 ">
        <div className=" py-10  flex flex-col space-y-8 overflow-visible ">
          {projects.map((projects)=>(
            <Card heading ={projects.heading} time = {projects.time} info = {projects.info} language ={projects.language} link = {projects.link} />
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default Project;
