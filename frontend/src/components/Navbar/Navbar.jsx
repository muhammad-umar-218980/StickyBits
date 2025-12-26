import React from 'react'
import { Link } from 'react-router-dom';
import { PlusIcon } from 'lucide-react';
import SplitText from "./SplitText";

const Navbar = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <nav className="flex justify-start items-center p-4 bg-base-100 shadow-md">
      <SplitText
        text="StickyBits"
        className="text-3xl font-bold text-base-content"
        delay={150}
        duration={0.8}
        ease="back.out(1.7)"
        splitType="chars"
        from={{ opacity: 0, y: 50, rotationX: -90 }}
        to={{ opacity: 1, y: 0, rotationX: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="left"
        onLetterAnimationComplete={handleAnimationComplete}
      />
      <Link
        to="/create"
        className="ml-auto flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-content rounded-full hover:bg-secondary-focus transition-colors duration-200"
      >
        <PlusIcon size={20} />
        New Note
      </Link>
    </nav>
  )
}

export default Navbar