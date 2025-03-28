import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="p-4 shadow-md flex justify-between items-center bg-background">
      <div className="text-xl font-semibold pl-10">Brand</div>
      <div className="flex items-center gap-4">
        <Button variant="default">Create</Button>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-6 h-6" />
        </a>
        <Button variant="ghost" onClick={toggleTheme}>
          {theme === "light" ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
