import React, { useEffect, useState } from "react";

function About() {
  return (
    <div className="h-screen relative md:mb-20">
        <div className=" flex justify-center text-opacity-20 text-[18vw] font-sans font-bold  opacity-60">
          <p>ABOUT ME</p>
        </div>
        <div className="ml-auto mr-auto flex justify-center md:text-2xl 2xl:text-5xl text-white max-w-[80%] md:max-w-[60%] 2xl:max-w-[70%] border border-gray-500 p-10">
          <h2>
            I am a 20-year-old from India and I am currently studying Computer
            Science at NIT, Jalandhar.
            <br />
            <br />I started programming past year and i am in love with it. I am
            currently learning web development. I also have some experience in
            Competitive Programming.
          </h2>
        </div>
    </div>
  );
}

export default About;
