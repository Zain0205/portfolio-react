import { ReactTyped } from "react-typed";
import Button from "../components/Button";
// import profile from "../assets/profile.png";

function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 flex items-center bg-gradient-to-t from-secondary via-white to-white justify-center flex-col gap-y-8 md:flex-row md:px-8 md:pt-24 lg:h-screen lg:pt-0 lg:pb-0">
      <div className="w-full flex items-center justify-center md:order-2 lg:w-fit mt-2 md:w-1/2">
        <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-primary rounded-full shadow-xl overflow-hidden">{/* <img className="object-cover w-[90%] mx-auto" src={profile} alt="" /> */}</div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-y-3 md:items-start lg:w-[40%]">
        <h3 className="text-base font-semibold text-light">Hello Everyone👋, My name is</h3>
        <h1 className="text-4xl lg:text-5xl text-primary font-bold">Fahmi Zain</h1>
        <ReactTyped className="text-dark font-bold text-2xl" strings={["College Student", "FrontEnd Developer"]} typeSpeed={120} backSpeed={140} loop />
        <p className="text-center lg:w-[80%] px-4 md:pl-0 mb-1 md:mb-3 md:text-justify">I create stunning website for your business, beginner experienced in FrontEnd web development</p>
        <Button>
          <a href="#about">See Details</a>
        </Button>
      </div>
    </section>
  );
}

export default Hero;
