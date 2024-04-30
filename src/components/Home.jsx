import React from "react";
import Nav from "../components/Nav";
import ShowCase from "../components/ShowCase";
import Aboutme from "../components/Aboutme";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "./FooterCom";
export default function Home() {
  return (
    <>
      
      <ShowCase />
      <Aboutme />
      <Skills />
      <Experience />
      <Projects />
     
    </>
  );
}
