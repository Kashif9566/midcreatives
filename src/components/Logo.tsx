import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export default function Logo({ className = '', size = 'medium' }: LogoProps) {
  const sizeClasses = {
    small: 'h-8 w-8',
    medium: 'h-10 w-10',
    large: 'h-12 w-12'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="MaaS Logo" 
        className={`${sizeClasses[size]} mr-2`}
      />
      <span className="text-2xl font-bold text-indigo-600">MaaS</span>
    </div>
  );
}