import { forwardRef, type InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: 'default' | 'filled';
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, variant = 'default', className = '', ...props }, ref) => {
    const baseStyles = 'text-xl font-medium rounded-[35.5px] focus:outline-none transition-all text-center placeholder:text-center';
    
    const variants = {
      default: 'bg-[#D9D9D9] px-8 py-6 border-none',
      filled: 'bg-[#EBEDEC] px-8 py-6 border-none'
    };

    return (
      <div className="w-full">
        {label && (
          <label className="block text-xl font-medium text-gray-700 mb-4">
            {label}
          </label>
        )}
        
        <input
          ref={ref}
          className={`${baseStyles} ${variants[variant]} ${className} ${error ? '!border-red-500 !border' : ''}`}
          style={{
            width: '603px',
            maxWidth: '100%',
            height: '71px',
            borderRadius: '35.5px',
            backgroundColor: '#D9D9D9'
          }}
          {...props}
        />
        
        {error && (
          <div className="flex justify-center mt-2">
            <p className="text-sm text-red-600 text-center max-w-[603px]">
              {error}
            </p>
          </div>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';