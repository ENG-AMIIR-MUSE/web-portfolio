"use client";

import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function FooterCom() {
  return (
    <Footer container>
      <div className="w-full max-w-[1200px]  m-auto ">
        <div className="">
         
          <div className="flex flex-wrap justify-between items-center ">
            <div>
              <span className="font-bold text-2xl md:text-3xl lg:text-4xl">Amir Dev</span>
            </div>
            <div>
              <Footer.Title title="Links" />
              <Footer.LinkGroup col>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about-me">About Me</Link>
                <Link to="/contact-us">Contact Me</Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://github.com/ENG-AMIIR-MUSE">Github</Footer.Link>
                <Footer.Link href="https://www.instagram.com/amir_muse_dev/">Instagram</Footer.Link>
                <Footer.Link href="https://www.linkedin.com/in/eng-amiir/">LinkedIn</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Amiir Muse" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.facebook.com/caamirciiltire.jr/" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/amir_muse_dev/" icon={BsInstagram} />
           
            <Footer.Icon href="https://github.com/ENG-AMIIR-MUSE" icon={BsGithub} />
          
          </div>
        </div>
      </div>
    </Footer>
  );
}
