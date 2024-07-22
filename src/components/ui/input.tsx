import { cn } from '@/src/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { IMaskInput, IMaskInputProps } from 'react-imask';

const inputVariants = cva(
  'flex h-12 text-sm w-full rounded-md ring-1 bg-background px-3 py-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'ring-gray-500',
        error: 'ring-error-dark text-error-dark'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

const MaskInput = React.forwardRef<
  HTMLInputElement,
  IMaskInputProps<HTMLInputElement> & VariantProps<typeof inputVariants>
>(({ className, type, variant, ...props }, ref) => {
  return (
    <IMaskInput
      type={type}
      className={cn(inputVariants({ variant, className }))}
      ref={ref}
      {...props}
    />
  );
});
MaskInput.displayName = 'MaskInput';

export { Input, inputVariants, MaskInput };
