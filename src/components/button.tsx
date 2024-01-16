import {
  Button as HeadlessButton,
  type ButtonProps as HeadlessButtonProps,
} from '@headlessui/react';
import { clsx } from 'clsx';
import React from 'react';
import Link from './link';

/* Expand the hit area to at least 44×44px on touch devices */
export function TouchTarget({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <span
        className='absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden'
        aria-hidden='true'
      />
    </>
  );
}

const styles = {
  base: [
    // Base
    'relative isolate inline-flex items-center justify-center gap-x-4 rounded-lg border text-sm md:text-md font-bold',

    // Sizing
    'px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6',

    // Focus
    'focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-primary-accent cursor-pointer',

    // Disabled
    'data-[disabled]:opacity-50',

    // Icon
    '[&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:text-[--btn-icon] [&>[data-slot=icon]]:sm:my-1 [&>[data-slot=icon]]:sm:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText]',
  ],
  solid: [
    // Optical border, implemented as the button background to avoid corner artifacts
    'border-transparent bg-[--btn-border]',

    // Disabled
    'before:data-[disabled]:shadow-none after:data-[disabled]:shadow-none',
  ],
  outline: [],
  plain: [],
  colors: {
    clear: [
      'text-primary-foreground [--btn-bg:theme:(colors.primary)] [--btn-border:none] ',

      '[--btn-icon:theme(colors.primary-foreground)] data-[active]:[--btn-icon:theme(colors.primary-foreground)] data-[hover]:[--btn-icon:theme(colors.primary-foreground)]',
    ],
  },
};

type ButtonProps = (
  | { color?: keyof typeof styles.colors; outline?: never; plain?: never }
  | { color?: never; outline: true; plain?: never }
  | { color?: never; outline?: never; plain: true }
) & { children: React.ReactNode } & (
    | HeadlessButtonProps
    | React.ComponentPropsWithoutRef<typeof Link>
  );

export const Button = React.forwardRef(function Button(
  { color, outline, plain, className, children, ...props }: ButtonProps,
  ref: React.ForwardedRef<HTMLElement>,
) {
  let buttonStyle;
  if (outline) {
    buttonStyle = styles.outline;
  } else if (plain) {
    buttonStyle = styles.plain;
  } else {
    buttonStyle = clsx(styles.solid, styles.colors[color ?? 'clear']);
  }

  const classes = clsx(className, styles.base, buttonStyle);

  return 'href' in props ? (
    <Link
      {...props}
      className={classes}
      ref={ref as React.ForwardedRef<HTMLAnchorElement>}
    >
      <TouchTarget>{children}</TouchTarget>
    </Link>
  ) : (
    <HeadlessButton
      {...props}
      className={clsx(classes, 'cursor-default')}
      ref={ref}
    >
      <TouchTarget>{children}</TouchTarget>
    </HeadlessButton>
  );
});
