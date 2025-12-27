import React from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon } from 'lucide-react';
import SplitText from "../SplitText";
import Logo from './Logo';

const Navbar = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <nav className="navbar bg-base-100/95 backdrop-blur-md shadow-sm border-b border-base-200 px-6 py-4 sticky top-0 z-50">
      <div className="navbar-start">
        <Logo />
      </div>
      
      <div className="navbar-center hidden sm:flex">
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
      
      <div className="navbar-end">
        {/* <Link
          to="/create"
          className="inline-block rounded-full bg-purple-400 px-8 py-2 text-xl font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:text-2xl"
        >
          + New Note
        </Link> */}
        <Link
  to="/create"
  className="btn btn-md sm:btn-lg rounded-full px-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 gap-3 bg-pink-500 hover:bg-pink-600 text-white border-none"
>
  <span className="font-bold text-xl sm:text-2xl pt-1 min-w-max">+ New Note</span>
</Link>

      </div>
    </nav>
  )
}

export default Navbar;