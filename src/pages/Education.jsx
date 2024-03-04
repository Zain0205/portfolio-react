import { FaRegCalendarAlt } from "react-icons/fa";
import { educations } from "../data";
import { motion, AnimatePresence } from "framer-motion";

export default function Education() {
  return (
    <>
      <section id="edu" className="pt-36 pb-16 px-5 md:px-8 lg:px-36">
        <h1 className="text-primary font-semibold text-3xl mb-10 xl:text-4xl">Education</h1>
        <div className="md:flex md:justify-end w-full">
          <div className="px-4 pt-3 pb-[0.1px] w-full border-l-4 ml-[2.5px] border-primary">
            {educations.map((edu) => (
              <EducationCard key={edu.id} instasi={edu.instasi} left={edu.left} tahun={edu.tahun} jurusan={edu.jurusan} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function EducationCard({ instasi, tahun, jurusan }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          y: 200,
          opacity: 0.8,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: .4,
          ease: "linear"
        }}
        // exit={{
        //   y: 150,
        //   opacity: 0
        // }}
        className={`px-4 py-2 bg-white border-2 mb-10 border-secondary rounded-xl shadow-lg shadow-secondary relative`}
      >
        <div className="h-4 w-4 absolute z-[5] -top-[14px] -left-7 rounded-full bg-primary" />
        <h1 className="text-2xl font-semibold mb-2">{instasi}</h1>
        <h3 className="text-base mb-1">{jurusan}</h3>
        <div className="flex items-center gap-x-2">
          <FaRegCalendarAlt />
          <p>{tahun}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
