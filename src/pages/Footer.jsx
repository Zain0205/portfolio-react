import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import SocialMedia from "../components/SocialMedia";

export default function Footer() {
  return (
    <footer className="pt-16 pb-16 bg-dark">
      <div className="px-5 md:px-8 lg:px-36">
        <div className="flex flex-col">
          {/* <div className="mb-5 md:text-center">
            <h1 className="text-white font-bold text-3xl mb-3">Fahmi Zain</h1>
            <h2 className="text-md text-white">Front End Developer</h2>
          </div> */}
          <div className="pb-5 border-b border-white">
            <h1 className="text-3xl font-bold text-white mb-3 md:text-center">Pages</h1>
            <ul className="flex flex-col w-full md:flex-row justify-center gap-x-4">
              <FooterList link="#home">Home</FooterList>
              <FooterList link="#about">About</FooterList>
              <FooterList link="#edu">Education</FooterList>
              <FooterList link="#skills">Skills</FooterList>
              <FooterList link="#projects">Projects</FooterList>
              <FooterList link="#contact">Contact</FooterList>
            </ul>
          </div>
          <div className="flex justify-center gap-x-3 mt-5">
            <SocialMedia footer>
              <FaGithub />
            </SocialMedia>
            <SocialMedia footer>
              <FaLinkedin />
            </SocialMedia>
            <SocialMedia footer>
              <FaInstagram />
            </SocialMedia>
            <SocialMedia footer>
              <FaDiscord />
            </SocialMedia>
            <SocialMedia footer>
              <FaWhatsapp />
            </SocialMedia>
          </div>
          <p className="mt-8 text-center text-slate-200">© 2024 Created by Fahmi Zain</p>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ children, link }) {
  return (
    <li className="w-fit text-white">
      <a className="block py-2 md:px-4" href={link}>
        {children}
      </a>
    </li>
  );
}
