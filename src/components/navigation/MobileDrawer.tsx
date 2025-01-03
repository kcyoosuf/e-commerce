import { Link } from "@tanstack/react-router";
import { navLinks } from "./NavigationItems";

type MobileDrawerProps = {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  pathname: string;
};
const MobileDrawer = ({
  isDrawerOpen,
  toggleDrawer,
  pathname,
}: MobileDrawerProps) =>
  isDrawerOpen && (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40"
      onClick={toggleDrawer}
      role="none"
    >
      <div
        className="fixed top-0 left-0 h-full w-64 bg-white shadow-md z-50"
        onClick={(e) => e.stopPropagation()}
        role="none"
      >
        <button
          className="p-3 text-gray-600 focus:outline-none"
          onClick={toggleDrawer}
        >
          <span className="material-icons">X</span>
        </button>
        <nav className="flex flex-col gap-4 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="[&.active]:font-bold flex"
              onClick={toggleDrawer}
            >
              <span className={"block pr-1"}>
                {<link.icon active={link.path === pathname} activeColour={"bg-red-400"}/>}
              </span>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );

export default MobileDrawer;
