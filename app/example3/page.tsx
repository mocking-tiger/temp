"use client";

import { useScroll, animated } from "@react-spring/web";
import { useState, useEffect } from "react";

export default function Example3() {
  const { scrollYProgress } = useScroll();
  const [diagonal, setDiagonal] = useState(0);
  const [Y, setY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

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
      const value = window.innerHeight + window.scrollY;
      console.log(value);
      console.log("y is", Y);
    };

    window.addEventListener("scroll", handleScroll);
  }, [Y]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const windowHeight = window.innerHeight;
  //     const documentHeight = document.documentElement.scrollHeight;
  //     const scrollTop = window.scrollY || window.pageYOffset;

  //     const scrollableHeight = documentHeight - windowHeight;
  //     const scrollProgress = (scrollTop / scrollableHeight) * 100;

  //     setScrollProgress(scrollProgress);
  //     console.log(Math.floor(scrollProgress));
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="h-[5000px]">
      {/* <animated.div
        className="fixed top-0 left-0 w-screen h-screen bg-yellow-600"
        style={{
          clipPath: `circle(${scrollProgress}%)`,
        }}
      ></animated.div> */}
      <animated.div
        style={{
          width: scrollYProgress.to((progress) => `${progress * diagonal}px`),
          height: scrollYProgress.to((progress) => `${progress * diagonal}px`),
          transform: "translate(-50%, -50%)",
        }}
        className="fixed top-1/2 left-1/2 bg-yellow-500 rounded-full"
      ></animated.div>
      <div
        className={`fixed top-36 left-36 text-5xl flex flex-col gap-5 ${Y >= 4000 ? `opacity-100 translate-y-0` : `opacity-0 translate-y-6`} transition-all duration-500`}
      >
        <h2>Aha!</h2>
        <h2>You found me!</h2>
      </div>
    </div>
  );
}
