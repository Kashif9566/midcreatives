import React from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function AnimatedButton({ 
  children, 
  onClick, 
  className = '', 
  type = 'button' 
}: AnimatedButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} overflow-hidden relative group flex items-center justify-center`}
    >
      <span className="inline-flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-[140%]">
        {children}
      </span>
      <span className="inline-flex items-center justify-center absolute transition-transform duration-300 translate-y-[140%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
        {children}
      </span>
    </button>
  );
} 