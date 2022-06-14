import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <div className="hidden md:block fixed top-0 z-[10] w-full text-white left items-center pr-24 py-10 ">
        <ul className="flex space-x-12 ">
          <li className=" flex ml-auto">
            <p className=" text-[#5D3FD3]">log</p>.About()
          </li>
          <li className=" flex ml-auto">
            <p className=" text-[#5D3FD3]">log</p>.Projects()
          </li>
          <li className=" flex ml-auto">
            <p className=" text-[#5D3FD3]">log</p>.Experience()
          </li>
          <li className=" flex ml-auto">
            <p className=" text-[#5D3FD3]">log</p>.Contact()
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
