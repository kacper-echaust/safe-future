import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

export default function ScrollDownArrow() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      animate={{ y: [0, 10, 0] }} // ruch góra-dół
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <a href="#about">
        <IoIosArrowDown
          className="w-10 h-10 text-gray-700"
          style={{
            color: "white",
            width: "150px",
            height: "50px",
            fontWeight: "normal",
          }}
        />
      </a>
    </motion.div>
  );
}
