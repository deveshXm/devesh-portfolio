import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import ParticleBackground from "../components/ParticleBackground";
import Project from "../components/Project";

const Home: NextPage = () => {
  return (
    <div className="font-body ">
      <Head>
        <title>Porfolio | Home</title>
      </Head>
      <Navbar />
      <main className="font-body">
        <ParticleBackground />
        <Intro />
        <About />
        <Project />
      </main>
    </div>
  );
};

export default Home;
