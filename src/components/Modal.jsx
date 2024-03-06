import { forwardRef, useImperativeHandle, useRef } from "react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";

const Modal = forwardRef(function Modal({ children }, ref) {
  const modalRef = useRef();
  const controlModal = useAnimationControls();

  useImperativeHandle(ref, () => {
    return {
      open() {
        controlModal.start("show");
        modalRef.current.showModal();
      },
      close() {
        controlModal.start("hide");
        modalRef.current.close();
      },
    };
  });

  return (
    <>
      <AnimatePresence>
        <motion.dialog
          // variants={{
          //   initial: {
          //     opacity: 0.5,
          //     scale: 0.6,
          //   },
          //   show: {
          //     opacity: 1,
          //     scale: 1,
          //   },
          //   hide: {
          //     opacity: 0.5,
          //     scale: 0.6,
          //   },
          // }}
          // transition={{
          //   duration: 0.5,
          //   ease: "backOut",
          // }}
          // initial="initial"
          // exit={controlModal}
          // animate={controlModal}
          className="backdrop:bg-dark/80 rounded-lg overflow-hidden w-2/3 md:w-1/2 lg:w-1/3"
          ref={modalRef}
        >
          {children}
        </motion.dialog>
      </AnimatePresence>
    </>
  );
});

export default Modal;
