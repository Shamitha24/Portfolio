import React, { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number; // ms per character
  className?: string;
}

const TypingText: React.FC<TypingTextProps> = ({ text, speed = 2000, className }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className={className}>{displayed}</span>;
};

export default TypingText;