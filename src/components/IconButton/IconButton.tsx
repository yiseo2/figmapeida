import React from 'react';
import './IconButton.css';

export type IconButtonVariant = 'primary' | 'neutral' | 'subtle';
export type IconButtonSize = 'medium' | 'small';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: IconButtonVariant;
  /** Button size — Medium: 44px, Small: 36px */
  size?: IconButtonSize;
  /** Icon element to display */
  icon: React.ReactNode;
  /** Accessible label for screen readers */
  'aria-label': string;
}

/**
 * IconButton component
 *
 * Circular icon-only button.
 * Variants: Primary (default), Neutral, Subtle
 * Sizes: Medium (44px, default), Small (36px)
 */
export const IconButton: React.FC<IconButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  icon,
  disabled,
  className,
  ...rest
}) => {
  const classNames = [
    'sds-icon-button',
    `sds-icon-button--${variant}`,
    `sds-icon-button--${size}`,
    disabled ? 'sds-icon-button--disabled' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classNames} disabled={disabled} {...rest}>
      <span className="sds-icon-button__icon">{icon}</span>
    </button>
  );
};
