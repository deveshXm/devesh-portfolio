import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

function Navbar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex fixed top-0 z-[1000] w-full text-white p-12 font-bold justify-end bg-gradient-to-t from-transparent to-black">
      <ul className="hidden xl:flex space-x-12">
        <li className=" flex ml-auto">
          <p className=" text-[#5D3FD3]">me</p>.About()
        </li>
        <li className=" flex ml-auto">
          <p className=" text-[#5D3FD3]">me</p>.Projects()
        </li>
        <li className=" flex ml-auto">
          <p className=" text-[#5D3FD3]">me</p>.Experience()
        </li>
        <li className=" flex ml-auto">
          <p className=" text-[#5D3FD3]">me</p>.Contact()
        </li>
      </ul>
        <div className=" ml-12 block xl:hidden hover:cursor-pointer" onClick={handleNav}>
        {!nav ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}
      </div>
      
      <div className= {!nav ? 'fixed left-0 top-0 h-full bg-opacity-50 backdrop-blur-md bg-black w-60 border-r border-r-gray-500 z-[1000] ease-in-out duration-500' : 'fixed left-[-100%] top-0 h-full bg-opacity-50 backdrop-blur-md bg-black w-60 border-r border-r-gray-500 z-[1000] ease-in duration-500 '}>
        <ul className="pt-24 w-full">
          <li className=" flex border-b border-b-[#5D3FD3] py-4 pl-4">
            <p className=" text-[#5D3FD3]">me</p>.About()
          </li>
          <li className=" flex border-b border-b-[#5D3FD3] py-4 pl-4">
            <p className=" text-[#5D3FD3]">me</p>.Projects()
          </li>
          <li className=" flex border-b border-b-[#5D3FD3] py-4 pl-4 ">
            <p className=" text-[#5D3FD3]">me</p>.Experience()
          </li>
          <li className=" flex border-b border-b-[#5D3FD3] py-4 pl-4">
            <p className=" text-[#5D3FD3]">me</p>.Contact()
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
