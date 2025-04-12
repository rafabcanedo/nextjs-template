import React from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const input = tv({
  base: 'block w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500',
  variants: {
    variant: {
      sm: 'text-sm py-1 px-2',
      md: 'text-base py-2 px-4',
      lg: 'text-lg py-3 px-5'
    },
    state: {
      default: 'border-gray-300',
      error: 'border-red-500 focus:ring-red-500',
      disabled: 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed'
    }
  },
  defaultVariants: {
    variant: 'md',
    state: 'default'
  }
});

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> &
  VariantProps<typeof input> & {
    label?: string;
    errorMessage?: string;
  };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, errorMessage, variant, state, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
        <input
          ref={ref}
          className={input({ variant, state, className })}
          disabled={state === 'disabled'}
          {...props}
        />
        {state === 'error' && errorMessage && (
          <span className="text-sm text-red-500">{errorMessage}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
