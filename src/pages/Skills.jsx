import { useState } from "react";
import { skills, tools } from "../data";
import { motion } from "framer-motion";

export default function Skills() {
  const [skillIsOpen, setSkillIsOpen] = useState(true);

  const skillIsActive = skillIsOpen ? "bg-primary text-white" : "bg-white text-dark";
  const toolIsActive = !skillIsOpen ? "bg-primary text-white" : "bg-white text-dark";

  return (
    <section id="skills" className="pt-28 pb-16 lg:pb-36 w-full">
      <div className="px-5 md:px-8 lg:px-36">
        <h1 className="text-3xl font-semibold text-primary lg:text-4xl">Skills</h1>
        <div className="mt-5">
          <div className="flex items-center gap-x-2">
            <button onClick={() => setSkillIsOpen(true)} className={`${skillIsActive} font-semibold text-md px-4 py-2 border border-primary rounded-sm`}>
              Tech Stack
            </button>
            <button onClick={() => setSkillIsOpen(false)} className={`${toolIsActive} font-semibold text-md px-4 py-2 border border-primary rounded-sm`}>
              Tools
            </button>
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-4 md:gap- mt-5">
            {skillIsOpen ? 
              (skills.map((skill) =>  (
                <SkillCard 
                  key={skill.id} 
                  img={skill.img} 
                  title={skill.title} 
                  level={skill.level} 
                />
              ))) : (tools.map((tool) => (
                <SkillCard 
                  key={tool.id} 
                  img={tool.img} 
                  title={tool.title} 
                  level={tool.level} 
                />)))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ img, title, level }) {
  return (
    <motion.div
      className="w-full pr-8 h-16 cursor-pointer sm:w-[48.9%] lg:w-[32.5%] xl:w-[24.2%] border border-dark shadow-lg rounded-md group px-2 flex items-center gap-x-3"
      initial={{
        y: 200,
        opacity: 0.8,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "linear",
      }}
    >
      <img className="w-8 group-hover:w-11 transition-all duration-200 ease-out" src={img} alt={title} />
      <div className="flex flex-col justify-center transition-all duration-200 ease-out">
        <h1 className="text-base font-semibold">{title}</h1>
        <p className="hidden group-hover:block text-sm">{level}</p>
      </div>
    </motion.div>
  );
}
