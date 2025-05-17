import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  variant?: 'header' | 'footer';
}

export default function Logo({ 
  className = '', 
  size = 'medium', 
  showText = true,
  variant = 'header'
}: LogoProps) {
  const sizeClasses = {
    small: 'h-8 w-8',
    medium: 'h-10 w-10',
    large: 'h-12 w-12'
  };

  const textSizeClasses = {
    small: 'text-lg',
    medium: 'text-xl',
    large: 'text-2xl'
  };

  const textColor = variant === 'header' ? 'text-black_remote' : 'text-primary';

  // Set the center line color based on the variant
  const centerLineColor = variant === 'footer' ? 'bg-white' : 'bg-black_remote';

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/images/mass_logo.png" 
        alt="MaaS Logo" 
        className={`${sizeClasses[size]} object-contain`}
      />
      
      {showText && (
        <>
          {/* Vertical Line Separator */}
          <div className={`h-7 w-[2px] ${centerLineColor} mx-3`} />
          
          <span className={`${textSizeClasses[size]} font-bold ${textColor} ml-2`}>
            Runrly
          </span>
        </>
      )}
    </div>
  );
}
