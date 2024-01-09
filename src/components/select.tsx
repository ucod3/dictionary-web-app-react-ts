import {
  Select as HeadlessSelect,
  type SelectProps as HeadlessSelectProps,
} from '@headlessui/react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

const Select = forwardRef<HTMLSelectElement, HeadlessSelectProps>(
  function Select({ className, multiple, ...props }, ref) {
    return (
      <span
        data-slot='control'
        className={clsx([
          className,

          // Basic layout
          'group relative block w-full',

          // Focus ring
          'after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-primary-accent sm:after:has-[[data-focus]]:ring-2 sm:after:has-[[data-focus]]:ring-primary-accent',

          // Disabled state
          'has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-secondary before:has-[[data-disabled]]:shadow-none',
        ])}
      >
        <HeadlessSelect
          ref={ref}
          multiple={multiple}
          {...props}
          className={clsx([
            // Basic layout
            'relative block w-full appearance-none rounded-lg py-[calc(theme(spacing[2.5])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]',

            // Horizontal padding
            multiple
              ? 'px-[calc(theme(spacing[3.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)]'
              : 'pl-[calc(theme(spacing[3.5])-1px)] pr-[calc(theme(spacing.10)-1px)] sm:pl-[calc(theme(spacing.3)-1px)] sm:pr-[calc(theme(spacing.9)-1px)]',

            // Options (multi-select)
            '[&_optgroup]:font-bold',

            // Typography
            'text-sm sm:text-md text-primary-foreground font-bold placeholder:text-primary-foreground',

            // Border
            'border-0',

            // Background color
            'bg-primary',

            // Hide default focus styles
            'focus:outline-none',

            // Invalid state
            'data-[invalid]:border-error data-[invalid]:data-[hover]:border-error',

            // Disabled state
            'data-[disabled]:border-secondary-accent/20 data-[disabled]:opacity-100 ]',
          ])}
        />
        {!multiple && (
          <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-primary-accent'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='14'
              height='8'
              viewBox='0 0 14 8'
              stroke='currentColor'
            >
              <path fill='none' strokeWidth='1.5' d='m1 1 6 6 6-6' />
            </svg>
          </span>
        )}
      </span>
    );
  },
);

export default Select;
