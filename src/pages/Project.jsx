import Button from "../components/Button";
import { projects } from "../data";

export default function Project() {
  return (
    <section id="projects" className="min-h-screen pt-36 pb-16">
      <div className="px-5 md:px-8 lg:px-36">
        <h1 className="text-primary font-semibold text-3xl lg:text-4xl">Projects</h1>
        <div className="flex flex-wrap gap-y-10 gap-x-3 items-center justify-center mt-12">
        {projects.map(project => <ProjectCard key={project.id} img={project.img} title={project.title} />)}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({img, title, description}) {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-2xl sm:w-[48.9%] lg:w-[49.1%] xl:w-[24.2%]">
      <div className="">
        <img src={img} alt={title} />
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-2">{title}</h1>
        <p className="text-base text-justify mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A accusantium voluptates maxime consequuntur quas, saepe eos modi iste cum veniam?</p>
        <Button>See Details</Button>
      </div>
    </div>
  );
}
