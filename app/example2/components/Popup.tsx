"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export default function Popup({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const styleClass = isVisible ? "opacity-100" : "opacity-0";

  useEffect(() => {
    const element = ref.current;
    if (element) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
          });
        },
        {
          root: null,
          threshold: 0.5,
        }
      );

      observer.observe(element);

      return () => {
        if (element) observer.unobserve(element);
      };
    }
  }, [ref]);

  return (
    <div
      ref={ref}
      className={`h-full flex justify-center items-center text-8xl ${styleClass} transition-all duration-[2s]`}
    >
      {children}
    </div>
  );
}
