import {
  Menu as HeadlessMenu,
  MenuButton as HeadlessMenuButton,
  MenuItem as HeadlessMenuItem,
  MenuItems as HeadlessMenuItems,
  Transition as HeadlessTransition,
  type MenuHeadingProps as HeadlessMenuItemProps,
  type MenuItemsProps as HeadlessMenuItemsProps,
  type MenuProps as HeadlessMenuProps,
} from '@headlessui/react';
import clsx from 'clsx';
import type React from 'react';
import { Fragment } from 'react';
import { Button } from './button';
import Link from './link';

export function Dropdown(props: HeadlessMenuProps) {
  return <HeadlessMenu {...props} />;
}

export function DropdownButton<T extends React.ElementType = typeof Button>(
  props: React.ComponentProps<typeof HeadlessMenuButton<T>>,
) {
  return <HeadlessMenuButton as={Button} {...props} />;
}

export function DropdownMenu({
  anchor = 'bottom',
  ...props
}: { anchor?: NonNullable<HeadlessMenuItemsProps['anchor']>['to'] } & Omit<
  HeadlessMenuItemsProps,
  'anchor'
>) {
  return (
    <HeadlessTransition
      as={Fragment}
      leave='duration-100 ease-in'
      leaveTo='opacity-0'
    >
      <HeadlessMenuItems
        {...props}
        anchor={{
          to: anchor,
          gap: 'var(--anchor-gap)',
          offset: 'var(--anchor-offset)',
          padding: 'var(--anchor-padding)',
        }}
        className={clsx(
          props.className,

          // Anchor positioning
          '[--anchor-gap:theme(spacing.2)] [--anchor-padding:theme(spacing.3)] data-[anchor~=end]:[--anchor-offset:4px] data-[anchor~=start]:[--anchor-offset:-4px]',

          // Base styles
          'isolate w-max rounded-2xl p-4',

          // Invisible border that is only visible in `forced-colors` mode for accessibility purposes
          'outline outline-1 outline-transparent focus:outline-none',

          // Handle scrolling when menu won't fit in viewport
          'overflow-y-auto',

          // Popover background

          'bg-primary dark:bg-secondary',

          // Shadows
          // 'drop-shadow-2xl',
          'shadow-dnl ring-1 ring-primary dark:ring-0 dark:shadow-primary-accent',

          // Define grid at the menu level if subgrid is supported
          'supports-[grid-template-columns:subgrid]:grid supports-[grid-template-columns:subgrid]:grid-cols-[auto_1fr_1.5rem_0.5rem_auto]',
        )}
      />
    </HeadlessTransition>
  );
}

export function DropdownItem({
  href,
  className,
  ...rest
}: { href?: string } & HeadlessMenuItemProps<'button'>) {
  return (
    <HeadlessMenuItem
      as={href ? Link : 'button'}
      type={href ? undefined : 'button'}
      {...rest}
      className={clsx(
        className,

        // Base styles
        'group cursor-pointer rounded-lg px-3.5 py-2.5 focus:outline-none sm:px-3 sm:py-1.5',

        // Text styles
        'text-left text-sm md:text-md font-bold text-primary-foreground forced-colors:text-[CanvasText]',

        // Focus
        ' data-[focus]:text-primary-accent',

        // Disabled state
        'data-[disabled]:opacity-50',

        // Forced colors mode
        'forced-color-adjust-none forced-colors:data-[focus]:bg-[Highlight] forced-colors:data-[focus]:text-[HighlightText] forced-colors:[&>[data-slot=icon]]:data-[focus]:text-[HighlightText]',

        // Use subgrid when available but fallback to an explicit grid layout if not
        'col-span-full grid grid-cols-[auto_1fr_1.5rem_0.5rem_auto] items-center supports-[grid-template-columns:subgrid]:grid-cols-subgrid',

        // Icon
        '[&>[data-slot=icon]]:col-start-1 [&>[data-slot=icon]]:row-start-1 [&>[data-slot=icon]]:mr-2.5 [&>[data-slot=icon]]:size-5 sm:[&>[data-slot=icon]]:mr-2 [&>[data-slot=icon]]:sm:size-4',
        '[&>[data-slot=icon]]:text-zinc-500 [&>[data-slot=icon]]:data-[focus]:text-white [&>[data-slot=icon]]:dark:text-zinc-500 [&>[data-slot=icon]]:data-[focus]:dark:text-white',
      )}
    />
  );
}
