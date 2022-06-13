import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Navbar from "../components/Navbar";
import ParticleBackground from "../components/ParticleBackground";
import Project from "../components/Project";

const Home: NextPage = () => {
  return (
    <div className="font-body">
      <Head>
        <title>Porfolio | Home</title>
      </Head>
      <Navbar />
      <main className="font-body">
        <ParticleBackground />
        <div className="absolute my-4 ml-4">
          <h1 className="font-bold text-6xl text-white ">Devesh Meena</h1>
        </div>
        <div className="h-screen content-center flex flex-col items-center justify-center">
          <About />
        </div>
        <div className="h-screen content-center flex flex-col items-center justify-center">
          <Project />
        </div>
      </main>
    </div>
  );
};

export default Home;
