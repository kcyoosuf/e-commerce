import { ReactNode } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const AnimateFadeIn = ({ children }: { children: ReactNode }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "50px",
  });
  return (
    <div
      ref={ref}
      className={`transform transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default AnimateFadeIn;
