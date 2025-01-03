import { Link } from "@tanstack/react-router";
import { MenuIcon, navLinks } from "./NavigationItems";

type BottomNavigationProps = {
  toggleDrawer: () => void;
  pathname: string;
};

const BottomNavigation = ({
  pathname,
  toggleDrawer,
}: BottomNavigationProps) => (
  <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t shadow z-30 px-3 py-2">
    <div className="flex justify-around py-2">
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className="text-center [&.active]:font-bold"
        >
          <span
            className={`block ${link.path === pathname ? "scale-150" : ""}`}
          >
            {<link.icon active={link.path === pathname} />}
          </span>
        </Link>
      ))}
      <button className="text-center" onClick={toggleDrawer}>
        <span className="block">
          <MenuIcon />
        </span>
      </button>
    </div>
  </div>
);

export default BottomNavigation;
