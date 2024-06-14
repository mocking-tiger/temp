"use client";

import { useScroll, animated } from "@react-spring/web";
import { useState, useEffect } from "react";

export default function Example3() {
  const { scrollYProgress } = useScroll();
  const [diagonal, setDiagonal] = useState(0);
  const [Y, setY] = useState(0);

  useEffect(() => {
    const updateDiagonal = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setDiagonal(Math.sqrt(width * width + height * height));
    };

    updateDiagonal();
    window.addEventListener("resize", updateDiagonal);
    return () => window.removeEventListener("resize", updateDiagonal);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setY(window.scrollY);
      console.log(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[3000px] relative">
      <animated.div
        style={{
          width: scrollYProgress.to((progress) => `${progress * diagonal}px`),
          height: scrollYProgress.to((progress) => `${progress * diagonal}px`),
          transform: "translate(-50%, -50%)",
        }}
        className="fixed top-1/2 left-1/2 bg-yellow-500 rounded-full"
      ></animated.div>
      <div
        className={`fixed top-36 left-36 text-5xl flex flex-col gap-5 ${Y >= 2000 ? `opacity-100 translate-y-0` : `opacity-0 translate-y-6`} transition-all duration-500`}
      >
        <h2>Aha!</h2>
        <h2>You found me!</h2>
      </div>
    </div>
  );
}
