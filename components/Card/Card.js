import React from "react";
import Link from "next/link";
import { VscGithub } from "react-icons/vsc";

function Card(props) {

  return (
    <div className="py-7 px-5 xl:px-10 w-[90%] border border-gray-400 min-w-[100%]">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl sm:text-5xl font-extrabold">{props.heading}</h1>
        <p className="text-xs xl:text-xl text-gray-400">{props.time}</p>
      </div>
      <div className="flex py-5 text-gray-400">{props.language}</div>
      <div>
        <p className="md:text-2xl">{props.info}</p>
      </div>
      <div className="flex justify-center pt-10">
        <Link href={props.link}>
          <div className="flex items-center justify-center py-2 border-2 border-gray-400 w-[70%] md:w-[50%]  sm:hover:border-[#5D3FD3] sm:hover:bg-black sm:hover:bg-opacity-30 sm:hover:cursor-pointer transition duration-300">
            <p>Link to Repo</p>
            <VscGithub className="ml-5 text-[#5D3FD3]" size={40} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
