/* Source: https://www.joshwcomeau.com/snippets/react-components/visually-hidden/ */

import { ReactNode, useCallback, useEffect, useState } from 'react';
import styles from './VisuallyHidden.module.css';

type VisuallyHiddenProps = {
  children: ReactNode;
  className?: string;
};

function VisuallyHidden({
  children,
  className = '',
  ...delegated
}: VisuallyHiddenProps) {
  const [forceShow, setForceShow] = useState(false);

  const handleKeyDown = useCallback((ev: KeyboardEvent) => {
    if (ev.key === 'Alt') {
      setForceShow(true);
    }
  }, []);

  const handleKeyUp = useCallback(() => {
    setForceShow(false);
  }, []);

  useEffect(() => {
    if (import.meta.env.MODE !== 'production') {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    }
    return () => {}; // return a no-op function when in production mode. This no-op function does nothing, but it satisfies the consistent-return Eslint rule.
  }, [handleKeyDown, handleKeyUp]);

  if (forceShow) {
    return <span className={styles.showWrapper}>{children}</span>;
  }

  return (
    <span className={`${className} ${styles.wrapper}`} {...delegated}>
      {children}
    </span>
  );
}

export default VisuallyHidden;
