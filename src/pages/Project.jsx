import { useRef } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { projects } from "../data";
import { motion } from "framer-motion";

export default function Project() {
  return (
    <>
      <section id="projects" className="pt-32 pb-16 w-full h-auto overflow-x-hidden">
        <div className="px-5 md:px-8 lg:px-36">
          <h1 className="text-primary font-semibold text-3xl lg:text-4xl">Projects</h1>
          <div className="flex flex-wrap gap-y-10 gap-x-4 items-center justify-center mt-12">
            {projects.map((project) => (
              <ProjectCard key={project.id} img={project.img} link={project.link} desc={project.description} title={project.title} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ProjectCard({ img, title, link, desc }) {
  const showModal = useRef();

  const handleTruncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const handleShowModal = () => {
    showModal.current.open();
  };

  const handleCloseModal = () => {
    showModal.current.close();
  };

  return (
    <>
      <Modal ref={showModal}>
        <div className="">
          <img src={img} alt={title} />
        </div>
        <div className="p-4">
          <h1 className="text-2xl font-semibold mb-2">{title}</h1>
          <p className="text-base mb-4">{desc}</p>
          <div className="flex gap-x-2 mt-5">
            <Button onClick={handleCloseModal} btn>
              Close
            </Button>
            <Button>
              <a className="block px-4 py-2" href={link} target="_blank">
                See Repository
              </a>
            </Button>
          </div>
        </div>
      </Modal>
      <motion.div
        initial={{
          opacity: 0,
          x: -100,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        transition={{
          duration: 1,
          // delay: delay
        }}
        className="w-full bg-white rounded-lg overflow-hidden shadow-2xl sm:w-[48.6%] lg:w-[48.8%] xl:w-[23.75%]"
      >
        <div className="">
          <img src={img} alt={title} />
        </div>
        <div className="p-4">
          <h1 className="text-2xl font-semibold mb-2">{title}</h1>
          <p className="text-base mb-4">{handleTruncateString(desc, 95)}</p>
          <Button onClick={handleShowModal} btn>
            See Details
          </Button>
        </div>
      </motion.div>
    </>
  );
}
