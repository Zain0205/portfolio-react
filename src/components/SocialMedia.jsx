import { motion } from "framer-motion";

export default function SocialMedia({ children, footer, delay }) {
  const classes = footer ? "border-white text-white shadow-secondary hover:border-dark hover:bg-white hover:shadow-dark" : "shadow-dark border-black text-black hover:border-primary hover:bg-primary";

  const groupHoverClasses = footer ? "group-hover:text-black" : "group-hover:text-white";

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1,
        delay: delay,
        ease: "easeInOut"
      }}
      className={`mr-3 shadow-md cursor-pointer border ${classes} p-2 rounded-full group`}
    >
      <div className={`${groupHoverClasses} text-2xl flex items-center justify-center`}>
        <a href="">{children}</a>
      </div>
    </motion.div>
  );
}
