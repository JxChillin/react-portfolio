import NavbarFixed from "../components/navbarfixed";
import "../styles/animations.css";

export default function About() {
  return (
    <div>
      <div className="text-white grid grid-cols-2 gap-4">
        <div
          className=" transition-all 
        duration-1000 ease-in-out animate-slide-in-l"
        >
          Insert Image Insert Image Insert Image Insert Image Insert Image
          Insert Image Insert Image Insert Image
        </div>
        <div
          className=" transition-all 
        duration-1000 ease-in-out animate-slide-in-r"
        >
          Insert Experience Insert Experience Insert Experience Insert
          Experience Insert Experience Insert Experience
        </div>
      </div>
    </div>
  );
}
