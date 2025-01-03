import { useLocation } from "@tanstack/react-router"; // Import from tanstack/react-location
import { useEffect, useState } from "react";
import BottomNavigation from "./BottomNavigation";
import DesktopLinks from "./DesktopLinks";
import Logo from "./Logo";
import MobileDrawer from "./MobileDrawer";
import { MenuIcon } from "./NavigationItems";

const Navigation = () => {
  const pathname = useLocation({
    select: (location) => location.pathname,
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isShrunk, setIsShrunk] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY >= lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setIsShrunk(currentScrollY > 50); // Update shrink state directly

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`hidden md:block fixed md:sticky md:top-0 w-full bg-red-400  z-30 ${isShrunk ? "shadow-md" : "border-b-2"}`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-300 ease-in-out ${isShrunk ? "h-20 px-3 py-3 rounded-b-3xl" : "h-24"}`}
        >
          <Logo />
          <div className="flex flex-col w-1/2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-100 rounded-md border border-gray-300 px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
          </div>
          <button
            className="block p-2 focus:outline-none"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </button>
        </div>
        {<DesktopLinks />}
      </div>

      <div className="block md:hidden sticky top-0 w-full bg-red-400 shadow z-30">
        <div className="flex items-center justify-between px-3 py-3">
          <Logo />
          <div className="flex flex-col w-full sm:w-1/2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-100 rounded-md border border-gray-300 px-5 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      <MobileDrawer
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        pathname={pathname}
      />

      {isVisible && (
        <BottomNavigation pathname={pathname} toggleDrawer={toggleDrawer} />
      )}
    </>
  );
};

export default Navigation;
