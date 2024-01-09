import {
  Description as HeadlessDescription,
  Field as HeadlessField,
  Fieldset as HeadlessFieldset,
  type DescriptionProps as HeadlessDescriptionProps,
  type FieldProps as HeadlessFieldProps,
  type FieldsetProps as HeadlessFieldsetProps,
} from '@headlessui/react';
import clsx from 'clsx';
import type React from 'react';

export function Fieldset({
  className,
  ...props
}: { disabled?: boolean } & HeadlessFieldsetProps) {
  return (
    <HeadlessFieldset
      {...props}
      className={clsx(
        className,
        '[&>*+[data-slot=control]]:mt-6 [&>[data-slot=text]]:mt-1',
      )}
    />
  );
}

export function FieldGroup({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      data-slot='control'
      className={clsx(className, 'space-y-8')}
    />
  );
}

export function Field({ className, ...props }: HeadlessFieldProps) {
  return (
    <HeadlessField
      className={clsx(
        className,
        '[&>[data-slot=label]+[data-slot=control]]:mt-3',
        '[&>[data-slot=label]+[data-slot=description]]:mt-1',
        '[&>[data-slot=description]+[data-slot=control]]:mt-3',
        '[&>[data-slot=control]+[data-slot=description]]:mt-3',
        '[&>[data-slot=control]+[data-slot=error]]:mt-3',
        '[&>[data-slot=label]]:font-medium',
      )}
      {...props}
    />
  );
}

export function ErrorMessage({
  className,
  disabled,
  ...props
}: { className?: string; disabled?: boolean } & HeadlessDescriptionProps) {
  return (
    <HeadlessDescription
      {...props}
      data-slot='error'
      className={clsx(
        className,
        'text-base md:text-lg text-error data-[disabled]:opacity-50',
      )}
    />
  );
}
