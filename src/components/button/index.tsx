import { ComponentProps } from 'react';
import { VariantProps, tv } from 'tailwind-variants';
import { CheckCircle } from 'lucide-react';

const button = tv({
  base: 'flex items-center justify-center text-sm rounded bg-primary-main font-poppins text-white hover:bg-hover cursor-pointer',
  variants: {
    size: {
      default: 'h-10 px-8',
      xs: 'h-6 px-6',
      sm: 'h-10 px-4',
      lg: 'h-10 px-10'
    },
    success: {
      true: 'bg-emerald-500 hover:bg-emerald-600'
    }
  },
  defaultVariants: {
    size: 'default',
    success: false
  }
});

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>;

export function Button({ success, size, className, ...props }: ButtonProps) {
  return (
    <button data-success={success} className={button({ size, success, className })} {...props}>
      {success ? <CheckCircle className="w-4 h-4" /> : props.children}
    </button>
  );
}
