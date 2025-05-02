import { Link } from 'react-router-dom';

interface SlidingButtonProps {
  to: string;
  text: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export default function SlidingButton({ to, text, className = '', variant = 'primary' }: SlidingButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md overflow-hidden relative group h-[36px]";
  
  const variantClasses = {
    primary: "text-black_remote bg-primary",
    secondary: "text-white bg-black_remote"
  };

  return (
    <Link
      to={to}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <span className="inline-flex items-center transition-transform duration-200 group-hover:-translate-y-[140%]">
        {text}
      </span>
      <span className="inline-flex items-center absolute transition-transform duration-200 translate-y-[140%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
        {text}
      </span>
    </Link>
  );
}