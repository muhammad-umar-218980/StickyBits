import React from 'react'
import { Link } from 'react-router-dom';
import { PlusIcon } from 'lucide-react';
import SplitText from "./SplitText";

const Navbar = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <nav className="grid grid-cols-3 items-center p-4 bg-base-100 shadow-md">
      {/* Left spacer - empty */}
      <div className="flex justify-start"></div>
      
      {/* Heading - Center column */}
      <div className="flex justify-center">
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
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>
      
      {/* Button - Right column */}
      <div className="flex justify-end">
        <Link
          to="/create"
          className="flex items-center gap-2 px-4 py-2 rounded-full hover:opacity-90 transition-all duration-200 text-sm font-medium bg-[#FFD1DC] text-[#8A2D52] shadow-sm hover:shadow-md"
        >
          <PlusIcon size={18} />
          <span>New Note</span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar