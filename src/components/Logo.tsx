
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Link to="/" className={`flex items-center ${className || ''}`}>
      <img 
        src="/lovable-uploads/c14ed647-02cd-418a-bf61-088abc275089.png" 
        alt="QuoteLinker Logo" 
        className="h-8 w-auto mr-2" 
      />
      <span className="text-xl font-bold">
        <span className="text-charcoal">Quote</span>
        <span className="text-neon-teal">Linker</span>
      </span>
    </Link>
  );
};

export default Logo;
