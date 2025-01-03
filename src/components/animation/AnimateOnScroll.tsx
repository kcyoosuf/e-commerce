import { ReactNode } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const AnimateOnScroll = ({ children }: { children: ReactNode }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "50px",
  });
  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
