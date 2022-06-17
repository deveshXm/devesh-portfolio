import React from 'react'
import ExperienceCard from './ExperienceCard'

function Experience() {
  const experience = [
    {
      id: "p1",
      heading: "Microsoft Engage",
      time: "May 2022",
      info: "In one month period of microsoft engage i built a movie recommendation algorithm which recommended movies to user based on last watch. ",
      language: "Internship",
    },
  ];
  return (
    <div className="relative bg-[#5D3FD3] bg-opacity-40 py-32">
      <div className="flex justify-end px-2 text-[#202020] text-[16.5vw] font-sans font-bold ">
        <p>EXPERIENCE</p>
      </div>
      <div className="text-white  space-y-6">
          {experience.map((experience)=>(
            <ExperienceCard heading ={experience.heading} time = {experience.time} info = {experience.info} language ={experience.language} />
          ))}
      </div>
    </div>
  )
}

export default Experience