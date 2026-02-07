import React from 'react';
import './ButtonGroup.css';

export type ButtonGroupAlign = 'justify' | 'start' | 'end' | 'center' | 'stack';

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Layout alignment of child buttons */
  align?: ButtonGroupAlign;
  /** Button elements */
  children: React.ReactNode;
}

/**
 * ButtonGroup component
 *
 * Groups multiple buttons together with consistent spacing and alignment.
 * Align options: Justify (default), Start, End, Center, Stack (vertical)
 */
export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  align = 'justify',
  children,
  className,
  ...rest
}) => {
  const classNames = [
    'sds-button-group',
    `sds-button-group--${align}`,
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} role="group" {...rest}>
      {children}
    </div>
  );
};
