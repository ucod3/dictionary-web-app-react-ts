import {
  Input as HeadlessInput,
  type InputProps as HeadlessInputProps,
} from '@headlessui/react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

const dateTypes = ['date', 'datetime-local', 'month', 'time', 'week'];
type DateType = (typeof dateTypes)[number];

const Input = forwardRef<
  HTMLInputElement,
  {
    type?:
      | 'email'
      | 'number'
      | 'password'
      | 'search'
      | 'tel'
      | 'text'
      | 'url'
      | DateType;
  } & HeadlessInputProps
>(function Input({ className, ...props }, ref) {
  return (
    <span
      data-slot='control'
      className={clsx([
        className,

        // Basic layout
        'relative block w-full',

        // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
        // 'before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow',

        // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
        'dark:before:hidden',

        // Focus ring
        'after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-primary-accent sm:after:has-[[data-focus]]:ring-2 sm:after:has-[[data-focus]]:ring-primary-accent',

        // Disabled state
        'has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none',

        // Invalid state
        'before:has-[[data-invalid]]:shadow-red-500/10',
      ])}
    >
      <HeadlessInput
        ref={ref}
        className={clsx([
          // Date classes
          props.type &&
            dateTypes.includes(props.type) && [
              '[&::-webkit-datetime-edit-fields-wrapper]:p-0',
              '[&::-webkit-date-and-time-value]:min-h-[1.5em]',
              '[&::-webkit-datetime-edit]:inline-flex',
              '[&::-webkit-datetime-edit]:p-0',
              '[&::-webkit-datetime-edit-year-field]:p-0',
              '[&::-webkit-datetime-edit-month-field]:p-0',
              '[&::-webkit-datetime-edit-day-field]:p-0',
              '[&::-webkit-datetime-edit-hour-field]:p-0',
              '[&::-webkit-datetime-edit-minute-field]:p-0',
              '[&::-webkit-datetime-edit-second-field]:p-0',
              '[&::-webkit-datetime-edit-millisecond-field]:p-0',
              '[&::-webkit-datetime-edit-meridiem-field]:p-0',
            ],

          // Basic layout
          'relative block w-full appearance-none rounded-xl px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] md:py-[calc(theme(spacing[3.5])-1px)]  pl-6 ',

          // Typography
          'md:text-heading-s text-primary-foreground placeholder:text-primary-foreground placeholder:opacity-25 text-body-m font-bold ',

          // Border
          'border-0',

          // Background color
          'bg-secondary',

          // Hide default focus styles
          'focus:outline-none ',

          // Invalid state
          'data-[invalid]:border-error data-[invalid]:data-[hover]:error0 data-[invalid]',

          // Disabled state
          'data-[disabled]:border-zinc-950/20 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15 data-[disabled]:dark:bg-white/[2.5%]',
        ])}
        {...props}
      />
    </span>
  );
});

export default Input;
