import { useState } from "react";
import Button from "../components/Button";
// import Modal from "../components/Modal";
import { projects } from "../data";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";

export default function Project() {
  return (
    <>
      <section id="projects" className="pt-32 pb-16 w-full">
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
  const [showDialog, setShowDialog] = useState(false);
  const controlModal = useAnimationControls();

  const handleTruncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const handleShowModal = () => {
    // showModal.current.open();
    setShowDialog(true);
    controlModal.start("show")
    // document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    // showModal.current.close();
    setShowDialog(false);
    controlModal.start("hide");
    // document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* <Modal ref={showModal}>
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
      </Modal> */}
      {showDialog && (
        <AnimatePresence>
          <div className="fixed w-screen z-[100] h-screen bg-dark/70 top-0 flex items-center justify-center bottom-0">
            <motion.div
              variants={{
                initial: {
                  opacity: 1,
                  scale: 1,
                },
                show: {
                  opacity: 1,
                  scale: 1,
                },
                hide: {
                  opacity: 0.5,
                  scale: 0.6,
                },
              }}
              transition={{
                duration: 0.5,
                ease: "backOut",
                delay: 1
              }}
              initial="initial"
              exit={controlModal}
              animate={controlModal}
              className="w-full bg-white rounded-lg overflow-hidden shadow-2xl sm:w-[48.6%] lg:w-[48.8%] xl:w-[23.75%]"
            >
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
            </motion.div>
          </div>
        </AnimatePresence>
      )}
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
