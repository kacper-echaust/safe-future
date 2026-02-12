import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TypingWithCursor() {
  const fullText = "Kompleksowe ubezpieczenia dopasowane do Twoich potrzeb.";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 70); // prędkość pisania
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
      {displayed}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="inline-block w-1 bg-black ml-1"
      />
    </h1>
  );
}
