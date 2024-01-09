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
        'before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow',

        // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
        'dark:before:hidden',

        // Focus ring
        // 'after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent sm:after:focus-within:ring-2sm:after:focus-within:ring-primary-accent',
        'after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-primary-accent sm:after:has-[[data-focus]]:ring-2 sm:after:has-[[data-focus]]:ring-primary-accent',

        // Active
        'active:ring-2 active:rounded-lg  active:ring-primary-accent',

        // Hover
        'hover:ring-2 hover:rounded-lg  hover:ring-primary-accent has-[[data-invalid]]:ring-2]]  has-[[data-invalid]]:hover:rounded-lg]] has-[[data-invalid]]:hover:ring-error]]',

        // Disabled state
        'has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-secondary-foreground before:has-[[data-disabled]]:shadow-none',

        // Invalid state
        'before:has-[[data-invalid]]:shadow-error',
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
          'relative block w-full appearance-none rounded-xl py-[calc(0.9375rem)] md:py-[calc(1.25rem)] pl-6',

          // Typography

          'text-base sm:text-lg text-primary-foreground font-bold placeholder:text-primary-foreground placeholder:opacity-25  ',
          'focus:placeholder-opacity-50 focus:placeholder-primary-foreground',

          // Border
          'border-0',

          // Background color
          'bg-secondary',

          // Hide default focus styles
          'focus:outline-none ',

          // Invalid state
          'data-[invalid]:ring-2 data-[invalid]:ring-error ',

          // Disabled state
          'data-[disabled]:border-secondary-foreground',
        ])}
        {...props}
      />
    </span>
  );
});

export default Input;
