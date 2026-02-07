import React from 'react';
import './ButtonDanger.css';

export type ButtonDangerVariant = 'primary' | 'subtle';
export type ButtonDangerSize = 'medium' | 'small';

export interface ButtonDangerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonDangerVariant;
  /** Button size */
  size?: ButtonDangerSize;
  /** Text label */
  label?: string;
  /** Icon displayed before the label */
  iconStart?: React.ReactNode;
  /** Icon displayed after the label */
  iconEnd?: React.ReactNode;
}

/**
 * ButtonDanger component
 *
 * Destructive / negative action button.
 * Variants: Primary (default), Subtle
 * Sizes: Medium (default), Small
 */
export const ButtonDanger: React.FC<ButtonDangerProps> = ({
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
    'sds-button-danger',
    `sds-button-danger--${variant}`,
    `sds-button-danger--${size}`,
    disabled ? 'sds-button-danger--disabled' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classNames} disabled={disabled} {...rest}>
      {iconStart && <span className="sds-button-danger__icon">{iconStart}</span>}
      {children ?? label}
      {iconEnd && <span className="sds-button-danger__icon">{iconEnd}</span>}
    </button>
  );
};
