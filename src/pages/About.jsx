import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import SocialMedia from "../components/SocialMedia";
import profile from "../assets/profile.png";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="md:max-h-screen px-5 pt-40 pb-16 lg:px-36 bg-gradient-to-b via-white from-secondary to-white">
      <div className="flex flex-col gap-y-5 md:flex-row md:items-center md:gap-x-10">
        <motion.div
          initial={{
            scale: 0.7,
            opacity: .5
          }}
          whileInView={{
            scale: 1,
            opacity: 1
          }}
          transition={{
            duration: 1,
            ease: "easeInOut"
          }}
          className="w-fit mx-auto relative"
        >
          <div className="bg-primary w-[263px] h-[328px] absolute -right-2 -bottom-2 top-1 rounded-2xl md:w-[295px] md:h-[391px]" />
          <div className="w-64 h-80 rounded-xl mx-auto bg-white border border-primary mb-5 px-8 flex items-center justify-center relative md:w-72 md:h-96">
            <div className="overflow-hidden absolute md:-bottom-2 px-4 w-full h-full">
              <img src={profile} alt="my profile" />
            </div>
          </div>
        </motion.div>
        <div className="w-full flex flex-col h-full lg:mt-6 xl:-mt-8">
          <div className="border-b border-dark py-5">
            <motion.h1
              initial={{
                opacity: 0.5,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="font-semibold text-3xl text-primary mb-5 xl:text-4xl"
            >
              About Me
            </motion.h1>
            <div className="w-full">
              <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-5">
                <div className="w-full md:w-1/2">
                  <motion.p
                    initial={{
                      x: 100,
                      opacity: 0,
                    }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="lg:text-lg text-justify indent-7"
                  >
                  Hi everyone, my name is Fahmi Zain, I am a College Student in from Esa Unggul University and I am from Jakarta, I am beginner experienced in FrontEnd Web Development and i really enjoy writing code.
                  </motion.p>
                </div>
                <div className="w-full md:w-1/2">
                  <motion.p
                    initial={{
                      x: 100,
                      opacity: 0,
                    }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeInOut",
                      delay: 0.7,
                    }}
                    className="lg:text-lg text-justify indent-7"
                  >
                   I can create you a stunning website for your business, I want everyone to know me in the most creative way, I can work indiviually or in a team. if you interested in hiring me, please contact in the listed contact
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <motion.h1
              initial={{
                opacity: 0.5,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="font-semibold text-primary text-3xl xl:text-4xl mb-4"
            >
              Social Media
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0.5,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="mb-3"
            >
              You can contact me through the social media below
            </motion.p>
            <div className="flex mt-5">
              <SocialMedia delay={0}>
                <FaGithub />
              </SocialMedia>
              <SocialMedia delay={0.2}>
                <FaLinkedin />
              </SocialMedia>
              <SocialMedia delay={0.4}>
                <FaInstagram />
              </SocialMedia>
              <SocialMedia delay={0.8}>
                <FaDiscord />
              </SocialMedia>
              <SocialMedia delay={1}>
                <FaWhatsapp />
              </SocialMedia>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
