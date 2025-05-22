"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const name = "Ahmed Nawar".split("");

const container = {
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const letter = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
  transition: {
    duration: 0.4,
    ease: "easeOut",
  },
};

export default function AnimatedName() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.span
      key={key}
      className="text-2xl md:text-3xl font-bold text-green-500"
      variants={container}
      initial="initial"
      animate="animate"
    >
      {name.map((char, index) => (
        <motion.span key={index} variants={letter}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
