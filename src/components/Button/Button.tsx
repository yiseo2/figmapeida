import React from 'react';
import './Button.css';

export type ButtonVariant = 'primary' | 'neutral' | 'subtle';
export type ButtonSize = 'medium' | 'small';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Text label */
  label?: string;
  /** Icon displayed before the label */
  iconStart?: React.ReactNode;
  /** Icon displayed after the label */
  iconEnd?: React.ReactNode;
}

/**
 * Button component
 *
 * Variants: Primary (default), Neutral, Subtle
 * Sizes: Medium (default), Small
 * Supports optional start/end icons.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  label = 'Button',
  iconStart,
  iconEnd,
  disabled,
  className,
  children,
  ...rest
}) => {
  const classNames = [
    'sds-button',
    `sds-button--${variant}`,
    `sds-button--${size}`,
    disabled ? 'sds-button--disabled' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classNames} disabled={disabled} {...rest}>
      {iconStart && <span className="sds-button__icon">{iconStart}</span>}
      {children ?? label}
      {iconEnd && <span className="sds-button__icon">{iconEnd}</span>}
    </button>
  );
};
