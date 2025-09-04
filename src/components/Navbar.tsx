import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/Denirshreallogo-removebg-preview (2).png"; // adjust path

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-20 bg-transparent">
      <div className="flex items-center justify-between px-6 py-4 max-w-full mx-2">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Denrish Group Logo"
            className="w-[50px] object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-white font-medium">
          <a
            href="https://denrish.com/"
            className="transition-colors cursor-pointer"
          >
            About
          </a>
          <button
            onClick={() => handleScroll("services")}
            className="transition-colors cursor-pointer bg-transparent border-0"
          >
            Services
          </button>
          <button
            onClick={() => handleScroll("goals")}
            className="transition-colors cursor-pointer bg-transparent border-0"
          >
            Goals
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 bg-white/95 text-black flex flex-col items-center justify-center space-y-8 text-xl font-semibold transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6"
        >
          <X className="w-7 h-7 text-black" />
        </button>

        <a
          href="https://denrish.com/"
          className="block"
          onClick={() => setIsOpen(false)}
        >
          About
        </a>
        <button
          className="block cursor-pointer bg-transparent border-0"
          onClick={() => handleScroll("services")}
        >
          Services
        </button>
        <button
          className="block cursor-pointer bg-transparent border-0"
          onClick={() => handleScroll("goals")}
        >
          Goals
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
