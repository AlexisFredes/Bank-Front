import { Button } from '@/src/components/ui/button';
import { Input, type InputProps } from '@/src/components/ui/input';
import { cn } from '@/src/lib/utils';
import { forwardRef, useState } from 'react';
import Icon from './icon';

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    // Recibe la función onChange desde react-hook-form
    const { onChange } = props;

    return (
      <div className="relative">
        <Input
          type={showPassword ? 'text' : 'password'}
          className={cn('hide-password-toggle pr-10', className)}
          ref={ref}
          {...props}
          onChange={onChange}
          variant={variant}
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-[#D9272E] hover:text-[#C1181F]"
          /* onClick={handleTogglePassword} */
          onMouseDown={() => {
            setShowPassword(true);
          }} // Detecta cuando el usuario hace clic
          onMouseUp={() => {
            setShowPassword(false);
          }} // Detecta cuando el usuario suelta el clic
          onMouseLeave={() => {
            setShowPassword(false);
          }}
        >
          {showPassword ? (
            <Icon name="visibility_off" className="text-2xl" />
          ) : (
            <Icon name="visibility" className="text-2xl" />
          )}
          <span className="sr-only">
            {showPassword ? 'Hide password' : 'Show password'}
          </span>
        </Button>

        {/* hides browsers password toggles */}
        <style>{`
          .hide-password-toggle::-ms-reveal,
          .hide-password-toggle::-ms-clear {
            visibility: hidden;
            pointer-events: none;
            display: none;
          }
        `}</style>
      </div>
    );
  }
);
PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
