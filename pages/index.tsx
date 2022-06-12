import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  
  return (
    <div className="font-body">
      <Head>
        <title>Porfolio | Home</title>
      </Head>
      <Navbar />
      <main className="font-body" id= "myCanvas">
        <div className="bg-[#202020] h-screen content-center flex flex-col items-center justify-center">
          <h1 className="absolute text-[#5D3FD3] font-semibold  mb-[20%] text-4xl mr-[60%] ">
            &lt;Body&gt;
          </h1>
          <About />
        </div>
        <div className="bg-[#5D3FD3] h-screen"></div>
      </main>
    </div>
  );
};

export default Home;
