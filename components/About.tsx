import React, { useEffect, useState } from "react";

function About() {
  return (
    <div className="max-w-[90%] md:max-w-[60%] max-h-96 z-10 md:mt-40">
      <h1 className=" text-[#5D3FD3] font-semibold text-2xl  md:text-4xl mr-[60%]">
        &lt;About&gt;
      </h1>
      <br/>
      <div className="md:text-2xl text-white visible ml-16 md:ml-32">
        <h2>
          I am a 20-year-old from India and I am currently studying Computer
          Science at NIT, Jalandhar. 
          <br/>
          <br/>
          I started programming past year and i am in
          love with it. I am currently learning web devolepment. I also have
          some experience in Competitive Programming.
        </h2>
      </div>
      <br/>
      <h1 className="  text-[#5D3FD3] font-semibold text-2xl  md:text-4xl mr-[60%]">
        &lt;/About&gt;
      </h1>
    </div>
  );
}

export default About;
