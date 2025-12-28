import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import SplitText from "../SplitText";
import Logo from "./Logo";

const NewNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <nav
      className={`navbar sticky top-0 z-50 px-4 py-3 transition-all duration-300 ${
        isScrolled
          ? "bg-base-100/80 backdrop-blur-lg shadow-md border-b border-base-200/50"
          : "bg-base-100/0 border-b border-transparent"
      }`}
    >
      <div className="navbar-start w-auto">
        <Logo />
      </div>

      <div className="navbar-center flex-1 justify-center mx-4">
        <div className="block">
          <SplitText
            text="StickyBits"
            className="text-xl sm:text-2xl md:text-3xl font-bold text-base-content"
            delay={150}
            duration={0.8}
            ease="back.out(1.7)"
            splitType="chars"
            from={{ opacity: 0, y: 50, rotationX: -90 }}
            to={{ opacity: 1, y: 0, rotationX: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>
      </div>

      <div className="navbar-end w-auto">
        <Link
          to="/create"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-4 py-2 font-medium text-white shadow-lg transition-all duration-300 hover:bg-primary-focus hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          <Plus className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
          <span className="hidden sm:inline font-semibold">New Note</span>
          <span className="sm:hidden font-semibold">New</span>
        </Link>
      </div>
    </nav>
  );
};

export default NewNavbar;
