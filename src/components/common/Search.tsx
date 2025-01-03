import { useEffect, useRef, useState } from "react";
import Logo from "../navigation/Logo";

const SearchSection = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Adjust scroll threshold as needed
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex align-middle justify-center fixed top-0 left-0 w-full bg-red-400 z-50 px-4 py-3 transition-all duration-300 ease-in-out  ${
        isShrunk ? "h-20 py-2 shadow-md rounded-b-3xl" : "h-32"
      }`}
      ref={searchRef}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo (Visible when not shrunk) */}
        <div
          className={`transition-opacity duration-300 ${isShrunk ? "opacity-0 hidden" : "opacity-100 block"}`}
        >
          <Logo />
        </div>

        {/* Search Input */}
        <div
          className={`relative w-full ${isShrunk ? "max-w-md" : "max-w-2xl"}`}
        >
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
          <input
            type="text"
            placeholder="Search..."
            className={`w-full h-100 rounded-md border border-gray-300 px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
              isShrunk ? "py-1 text-sm" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
