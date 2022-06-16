import React from "react";
import Typewriter from "typewriter-effect";

function Intro() {
  const handleType = (count: number) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log("Done after 5 loops!");
  };

  return (
    <div className="relative my-4 ml-4 h-screen flex items-center justify-center">
      <div className="text-white font-sans font-bold text-5xl md:text-9xl 2xl:text-[12vw]">
        <div>
          Hi!{" "}
          <div className="flex">
            I am &nbsp;<h1 className="text-white">Devesh</h1>,
          </div>
          <div className=" flex text-[#5D3FD3]">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: ["Developer", "Student","Learner"],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
