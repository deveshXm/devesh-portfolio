import React, { useEffect, useState } from "react";

function About() {
  return (
    <div className="flex justify-center h-screen items-center relative">
      <div className="absolute text-opacity-20 text-[18vw] font-sans font-bold -translate-y-60 opacity-60">
        <p>ABOUT ME</p>
      </div>
      <div className="relative md:text-2xl text-white max-w-[80%] md:max-w-[60%]">
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
