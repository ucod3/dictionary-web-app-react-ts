import { DataInteractive as HeadlessDataInteractive } from '@headlessui/react';
import React from 'react';

const Link = React.forwardRef(function Link(
  props: {
    href: string;
    children: React.ReactNode;
  } & React.ComponentPropsWithoutRef<'a'>,
  ref: React.ForwardedRef<HTMLAnchorElement>,
) {
  return (
    <HeadlessDataInteractive>
      <a {...props} ref={ref}>
        {props.children}
      </a>
    </HeadlessDataInteractive>
  );
});

export default Link;
