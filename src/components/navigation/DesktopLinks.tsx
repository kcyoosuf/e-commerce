import { Link } from "@tanstack/react-router";
import { navLinks } from "./NavigationItems";
import AnimateOnScroll from "../animation/AnimateOnScroll";

const DesktopLinks = () => (
  <AnimateOnScroll>
    <div className="hidden md:flex gap-4 justify-around bg-white">
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className="[&.active]:font-bold py-2"
        >
          {link.label}
        </Link>
      ))}
    </div>
  </AnimateOnScroll>
);

export default DesktopLinks;
