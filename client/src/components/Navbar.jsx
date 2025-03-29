import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="p-3 shadow-md flex justify-between items-center bg-background">
      <div className="font-bold pl-10 h-12">
        <Link to="/">
          <img
            src="/image1.png"
            alt="logo"
            className="w-35  h-auto object-contain mix-blend-multiply"
          />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/create">
          <Button variant="default" className="cursor-pointer ">
            Create
          </Button>
        </Link>
        <Link to={"https://github.com/RajTangadi/VisionaryAI"} target="_blank">
          <FaGithub className="w-6 h-6 text-black" />
        </Link>
        <Button
          variant="ghost"
          onClick={toggleTheme}
          className="cursor-pointer"
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5 " />
          ) : (
            <Sun className="w-5 h-5 text-black" />
          )}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
