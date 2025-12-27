const Logo = () => {
  return (
    <div className="flex items-center gap-2 group cursor-pointer hover:rotate-6 transition-transform duration-300">
      <svg
        width="64"
        height="64"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md"
      >
        {/* Yellow Note Body with slightly rounded corners */}
        <rect x="10" y="10" width="80" height="80" rx="5" ry="5" fill="#FEFF9C" />
        
        {/* Folded Corner (Dog-ear) */}
        <path d="M60 90 L90 60 L90 85 Q90 90 85 90 Z" fill="#E6E68A" />
        
        {/* Sunglasses - Frame */}
        <path
          d="M20 40 Q20 35 25 35 L45 35 Q50 35 50 40 L50 50 Q50 55 45 55 L25 55 Q20 55 20 50 Z"
          fill="black"
        />
        <path
          d="M55 40 Q55 35 60 35 L80 35 Q85 35 85 40 L85 50 Q85 55 80 55 L60 55 Q55 55 55 50 Z"
          fill="black"
        />
        {/* Sunglasses - Bridge */}
        <line x1="50" y1="40" x2="55" y2="40" stroke="black" strokeWidth="3" />
        
        {/* Sunglasses - Shine/Reflection */}
        <path d="M25 38 L40 38" stroke="white" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
        <path d="M60 38 L75 38" stroke="white" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
        
        {/* Smile (Cool smirk) */}
        <path d="M40 70 Q50 75 60 70" stroke="black" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export default Logo;
