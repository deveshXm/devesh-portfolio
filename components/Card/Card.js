import React from "react";
import Link from "next/link";
import {VscGithub} from 'react-icons/vsc'

function Card(props) {
  const heading = "Matinee";
  const time = "May-June 2022";
  const info =
    "Matinee is a movie watching platform which also recommends movie to user based on last watch."
  const language = "TailwindCSS NextJs Python FastApi";
  const link = "https://github.com/deveshXm/matinee";

  return (
    <div className="py-7 px-5 xl:px-10 w-[90%] border border-gray-400">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl sm:text-5xl font-extrabold">{heading}</h1>
        <p className="text-xs xl:text-xl text-gray-400">{time}</p>
      </div>
      <div className="flex py-5 text-gray-400">{language}</div>
      <div>
        <p className="md:text-2xl">{info}</p>
      </div>
      <div className="flex justify-center pt-10">
        <Link href={link}>
          <div className="flex items-center justify-center py-2 border-2 border-gray-400 w-[70%] md:w-[50%]  sm:hover:border-gray-200 sm:hover:bg-black sm:hover:bg-opacity-30 sm:hover:cursor-pointer">
              <p>Link to Repo</p>
              <VscGithub className = 'ml-5 text-[#5D3FD3]' size={40}/>            
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
