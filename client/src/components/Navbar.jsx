import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-3 shadow-md flex justify-between items-center bg-background relative">
      <div className="font-bold pl-4 md:pl-10 h-12 flex items-center">
        <Link to="/">
          <img
            src="/image1.png"
            alt="logo"
            className="w-32 h-auto object-contain mix-blend-multiply"
          />
        </Link>
      </div>
      
      <div className="md:hidden flex items-center pr-4">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none text-black">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`absolute md:static top-16 right-0 bg-background w-full md:w-auto md:flex md:items-center md:gap-4 transition-all duration-300 ${isOpen ? "block" : "hidden"}`}
      >
        <div className="flex flex-col md:flex-row items-center gap-4 p-4 md:p-0">
          <Link to="/create" onClick={() => setIsOpen(false)}>
            <Button variant="default" className="w-full md:w-auto">
              Create
            </Button>
          </Link>
          <Link
            to={"https://github.com/RajTangadi/VisionaryAI"}
            target="_blank"
            onClick={() => setIsOpen(false)}
          >
            <FaGithub className="w-6 h-6 text-black" />
          </Link>
          <Button
            variant="ghost"
            onClick={toggleTheme}
            className="cursor-pointer"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5 text-black" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
