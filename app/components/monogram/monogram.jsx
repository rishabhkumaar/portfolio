import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="48"
      height="29"
      viewBox="0 0 48 29"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          {/* Futuristic RK ligature */}
          <path d="M2 2h14a6 6 0 0 1 6 6c0 3.2-2.5 5.8-5.6 6l7.6 13h-6.8L10 14.5V27H4V2Zm6 5v5h8a3 3 0 0 0 0-6H8Zm19 0h6v8l8.5-8H46l-9 8.5L46.5 27h-7L33 18.5V27h-6V2Z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
