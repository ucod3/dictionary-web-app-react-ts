import {
  Field as HeadlessField,
  Switch as HeadlessSwitch,
  type FieldProps as HeadlessFieldProps,
  type SwitchProps as HeadlessSwitchProps,
} from '@headlessui/react';
import { clsx } from 'clsx';
import type React from 'react';

export function SwitchGroup({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      data-slot='control'
      {...props}
      className={clsx(
        className,

        // Basic groups
        'space-y-3 [&_[data-slot=label]]:font-normal',

        // With descriptions
        'has-[[data-slot=description]]:space-y-6 [&_[data-slot=label]]:has-[[data-slot=description]]:font-medium',
      )}
    />
  );
}

export function SwitchField({ className, ...props }: HeadlessFieldProps) {
  return (
    <HeadlessField
      data-slot='field'
      {...props}
      className={clsx(
        className,

        // Base layout
        'grid grid-cols-[1fr_auto] items-center gap-x-8 gap-y-1 sm:grid-cols-[1fr_auto]',

        // Control layout
        '[&>[data-slot=control]]:col-start-2 [&>[data-slot=control]]:self-center',

        // Label layout
        '[&>[data-slot=label]]:col-start-1 [&>[data-slot=label]]:row-start-1 [&>[data-slot=label]]:justify-self-start',

        // Description layout
        '[&>[data-slot=description]]:col-start-1 [&>[data-slot=description]]:row-start-2',

        // With description
        '[&_[data-slot=label]]:has-[[data-slot=description]]:font-medium',
      )}
    />
  );
}

const colors = {
  'toggle-accent': [
    '[--switch-bg-ring:theme(colors.toggle-bg)] [--switch-bg:theme(colors.toggle-bg)] dark:[--switch-bg-ring:theme(colors.toggle-bg)] ]',
    '[--switch-shadow:theme(colors.toggle-bg)] [--switch-ring:theme(colors.toggle-bg)] [--switch:theme(colors.toggle-fg)]  ',
  ],
};

type Color = keyof typeof colors;

export function Switch({
  color = 'toggle-accent',
  className,
  children,
  ...props
}: {
  color?: Color;
  className?: string;
  children?: React.ReactNode;
} & Omit<HeadlessSwitchProps, 'children'>) {
  return (
    <HeadlessSwitch
      data-slot='control'
      className={clsx(
        className,

        // Base styles
        'group relative isolate inline-flex h-[21px] w-[42px] cursor-default rounded-full p-[2.75px] ',

        // Transitions
        'transition duration-0 ease-in-out data-[changing]:duration-200',

        // Outline and background color in forced-colors mode so switch is still visible
        'forced-colors:outline forced-colors:[--switch-bg:Highlight] ]',

        // Unchecked
        'bg-[--switch-bg] :ring-[--switch-bg-ring]]',

        // Checked
        'data-[checked]:bg-[--switch-bg] data-[checked]:ring-[--switch-bg-ring]',

        // Focus
        // 'focus:outline-none',
        'focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-primary-accent',

        // Color specific styles
        colors[color as Color],
      )}
      {...props}
    >
      <span
        aria-hidden='true'
        className={clsx(
          // Basic layout
          'pointer-events-none relative inline-block size-[16px] rounded-full ',

          // Transition
          'translate-x-0 transition duration-200 ease-in-out',

          // Invisible border so the switch is still visible in forced-colors mode
          'border border-transparent',

          // Unchecked
          // 'bg-white shadow ring-1 ring-black/5',
          'bg-[--switch] border-[--switch-ring] shadow-[--switch-shadow]',

          // Checked
          'group-data-[checked]:bg-[--switch] group-data-[checked]:shadow-[--switch-shadow] group-data-[checked]:ring-[--switch-ring]',
          'group-data-[checked]:translate-x-5 ',
        )}
      />
    </HeadlessSwitch>
  );
}
