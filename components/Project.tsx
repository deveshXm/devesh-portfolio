import React from "react";
import Card from "./Card.js";

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
    <div className=" relative bg-black py-32">
      <div className="pl-2 text-[#202020] text-[20vw] font-sans font-bold ">
        <p>WORK</p>
      </div>
      <div className="text-white  space-y-6">
          {projects.map((projects)=>(
            <Card heading ={projects.heading} time = {projects.time} info = {projects.info} language ={projects.language} link = {projects.link} />
          ))}
      </div>
    </div>
  );
}

export default Project;
