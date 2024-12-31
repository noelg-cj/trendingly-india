import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-gray-800">
          Welcome to Trendingly India{" "}
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Your go-to platform for influencer marketing solutions.
        </p>
      </motion.div>
    </div>
  );
}
