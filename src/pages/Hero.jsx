import { ReactTyped } from "react-typed";
import Button from "../components/Button";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";

function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 flex items-center bg-gradient-to-t from-secondary via-white to-white justify-center flex-col gap-y-8 md:flex-row md:px-8 md:pt-24 lg:h-screen lg:pt-0 lg:pb-0 w-full overflow-x-hidden">
      <motion.div
        initial={{
          x: 300,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
        className="w-full flex items-center justify-center md:order-2 lg:w-fit mt-2 md:w-1/2"
      >
        <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-primary rounded-full shadow-lg shadow-white overflow-hidden">
          <img className="object-cover w-[90%] mx-auto" src={profile} alt="" />
        </div>
      </motion.div>
      <div className="w-full flex flex-col items-center justify-center gap-y-3 md:items-start lg:w-[40%]">
        <motion.h3
          initial={{
            y: -40,
            opacity: 0.5,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="text-base font-semibold text-light"
        >
          Hello Everyone👋, My name is
        </motion.h3>
        <motion.h1
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="text-4xl lg:text-5xl text-primary font-bold"
        >
          Fahmi Zain
        </motion.h1>
        <ReactTyped className="text-dark font-bold text-2xl" strings={["College Student", "FrontEnd Developer"]} typeSpeed={120} backSpeed={140} loop />
        <motion.p
          initial={{
            x: 300,
          }}
          whileInView={{
            x: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="text-center lg:w-[80%] px-4 md:pl-0 mb-1 md:mb-3 md:text-justify"
        >
          I create stunning website for your business, beginner experienced in FrontEnd web development
        </motion.p>
        <Button
          initial={{
            scale: 0,
            opacity: 0.5,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
        >
          <a className="block px-4 py-2" href="#about">
            See Details
          </a>
        </Button>
      </div>
    </section>
  );
}

export default Hero;
