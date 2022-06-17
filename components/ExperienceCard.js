import React from "react";

function Card(props) {

  return (
    <div className="ml-auto mr-auto py-7 px-5 xl:px-10 w-[90%] md:w-[70%] border border-gray-400 bg-[#202020] ">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl sm:text-5xl font-extrabold text-[#5D3FD3]">{props.heading}</h1>
        <p className="text-xs xl:text-xl text-gray-400">{props.time}</p>
      </div>
      <div className="flex py-5 text-gray-400 text-2xl">{props.language}</div>
      <div>
        <p className="md:text-2xl">{props.info}</p>
      </div>
    </div>
  );
}

export default Card;
