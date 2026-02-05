import { forwardRef, useState } from 'react';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'primary', 
    isLoading = false, 
    fullWidth = false, 
    children, 
    className = '', 
    disabled,
    ...props 
  }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);
    
    const baseStyles = `font-medium rounded-[45px] transition-all duration-200 
                       disabled:cursor-not-allowed mx-auto block
                       ${fullWidth ? 'w-full' : ''}`;

    const getButtonStyles = () => {
      if (disabled || isLoading) {
        return 'bg-[#EBEDEC] text-gray-500 cursor-not-allowed';
      }
      
      if (isActive) {
        return 'bg-[#DCDCDC] text-gray-900 shadow-none border-none';
      }
      
      if (isHovered) {
        return 'bg-[#EBEDEC] text-gray-900 shadow-[0_4px_4px_rgba(0,0,0,0.25)] border border-gray-400';
      }
      
      return 'bg-[#EBEDEC] text-gray-900 shadow-[0_4px_4px_rgba(0,0,0,0.25)] border-none';
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${getButtonStyles()} ${className}`}
        disabled={isLoading || disabled}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsActive(false);
        }}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        onTouchStart={() => setIsActive(true)}
        onTouchEnd={() => setIsActive(false)}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="w-6 h-6 border-3 border-current border-t-transparent 
                          rounded-full animate-spin mr-3" />
            <span className="text-xl">Загрузка...</span>
          </div>
        ) : (
          <span className="text-xl font-medium">{children}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';