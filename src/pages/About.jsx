import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import SocialMedia from "../components/SocialMedia";
// import profile from "../assets/profile.png";

export default function About() {
  return (
    <section id="about" className="md:max-h-screen px-5 pt-40 pb-16 lg:px-36 bg-gradient-to-b via-white from-secondary to-white">
      <div className="flex flex-col gap-y-5 md:flex-row md:items-center md:gap-x-10">
        <div
          className="w-fit mx-auto relative"
        >
          <div className="bg-primary w-[263px] h-[328px] absolute -right-2 -bottom-2 top-1 rounded-2xl md:w-[295px] md:h-[391px]" />
          <div className="w-64 h-80 rounded-xl mx-auto bg-white border border-primary mb-5 px-8 flex items-center justify-center relative md:w-72 md:h-96">
            <div className="overflow-hidden absolute md:-bottom-2 px-4 w-full h-full">
              {/* <img src={profile} alt="my profile" /> */}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col h-full lg:mt-6 xl:-mt-8">
          <div className="border-b border-dark py-5">
            <h1 className="font-semibold text-3xl text-primary mb-5 xl:text-4xl">About Me</h1>
            <div className="w-full">
              <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-5">
                <div className="w-full md:w-1/2">
                  <p className="lg:text-lg text-justify indent-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et deleniti rerum impedit incidunt voluptas officia voluptatum at, recusandae iure distinctio ipsam, quod saepe repudiandae maxime.
                  </p>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="lg:text-lg text-justify indent-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo necessitatibus praesentium obcaecati similique dolorum modi nesciunt quaerat nihil natus eaque.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="font-semibold text-primary text-3xl xl:text-4xl mb-4">Mari Berteman</h1>
            <p className="mb-3">Anda dapat menghubungi saya melalui sosial media di bawah ini</p>
            <div className="flex mt-5">
              <SocialMedia>
                <FaGithub />
              </SocialMedia>
              <SocialMedia>
                <FaLinkedin />
              </SocialMedia>
              <SocialMedia>
                <FaInstagram />
              </SocialMedia>
              <SocialMedia>
                <FaDiscord />
              </SocialMedia>
              <SocialMedia>
                <FaWhatsapp />
              </SocialMedia>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
