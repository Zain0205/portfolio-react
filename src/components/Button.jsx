import { motion } from "framer-motion";

function Button({ children, btn, ...props }) {
  const btnClass = btn ? "px-4 py-2" : "";

  return (
    <motion.button {...props} className={`text-white ${btnClass} shadow-lg shadow-secondary border border-primary transition-colors duration-100 ease-out hover:bg-white hover:text-primary bg-primary font-semibold rounded-md`}>
      {children}
    </motion.button>
  );
}

export default Button;
