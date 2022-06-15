import React from "react";
import Card from "./Card/Card.js";

function Project() {

  const projects = [
    {
      id:"p1",
      heading: "Matinee",
      time:"May-June 2022",
      info:"Matinee is a movie watching platform which also recommends movie to user based on last watch",
      language:"TailwindCSS NextJs Python FastApi",
      link: "https://github.com/deveshXm/Flood-Prediction"
    },
    {
      id:"p2",
      heading: "Flood Detection",
      time:"April 2022",
      info:"Prediction flood chances in an area using Linear Regression",
      language:"Python",
      link: "https://github.com/deveshXm/matinee"
    },
    
  ]
  return (
    <div className="absolute max-w-[90%] md:max-w-[60%] w-[90%] z-10 md:mt-40 text-white">
      <h1 className=" text-[#5D3FD3] font-semibold text-2xl  md:text-4xl  ">
        &lt;Projects&gt;
      </h1>
      <div className=" py-10  flex justify-center">
        <Card/>  
      </div>
          
      <h1 className="  text-[#5D3FD3] font-semibold text-2xl  md:text-4xl ">
        &lt;/Projects&gt;
      </h1>
    </div>
  );
}

export default Project;
