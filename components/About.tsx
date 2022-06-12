import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

function About() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown',handleKeypress,true);
  });
  const handleKeypress = (event: any) => {
    if (event.key === "Enter") {
      setShow(true);
    }
  };

  return (
    <div className="max-w-[60%]">
      {!show ? (
        <div className="text-4xl text-white" onKeyPress={handleKeypress}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("console.log('About')...[Press Enter]").start();
            }}
          />
        </div>
      ) : (
        <div className="text-white tex">
            <p>&gt;&gt; I am a 20-year-old from India and I am currently studying Computer Science at NIT, Jalandhar.
                <br/>
                <br/>
                &gt;&gt; I started programming past year and i am in love with it. I am currently learning web devolepment. I also have some experience in Competitive Programming.
            </p>
        </div>
      )}
    </div>
  );
}

export default About;
