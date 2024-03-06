import Input from "../components/Input";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="pt-28 pb-28">
      <motion.div
        initial={{
          scale: 0.5,
          opacity: .5
        }}
        whileInView={{
          scale: 1,
          opacity: 1
        }}
        transition={{
          duration: 1
        }}
        className="px-5 md:px-8 lg:px-36"
      >
        <h1 className="text-3xl lg:text-4xl font-semibold text-primary mb-8">Contact</h1>
        <div className="w-full">
          <form>
            <div className="md:flex md:gap-x-3">
              <Input type="text" placeholder="First Name" title="First Name" id="nama-depan" />
              <Input type="text" placeholder="Last Name" title="Last Name" id="nama-belakang" />
            </div>
            <div className="md:flex md:gap-x-3">
              <Input type="Email" placeholder="Email" title="Email" id="email" />
              <Input type="text" placeholder="Subject" title="Subject" id="subject" />
            </div>
            <Input placeholder="Enter Your Message" title="Message" id="pesan" textArea />
          </form>
          <button className="bg-primary text-white w-full shadow-lg shadow-secondary border border-primary md:w-36 px-4 py-2 rounded-md mt-4 hover:bg-white hover:text-primary font-semibold">Submit</button>
        </div>
      </motion.div>
    </section>
  );
}
