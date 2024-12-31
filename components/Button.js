import { motion } from "framer-motion";

export default function Button({ children, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-blue-500 text-white py-2 px-4 rounded"
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
