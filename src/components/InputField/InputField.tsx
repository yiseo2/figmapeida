import React from 'react';
import './InputField.css';

export type InputFieldState = 'default' | 'error' | 'disabled';

export interface InputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Field label */
  label?: string;
  /** Helper description below the label */
  description?: string;
  /** Error message (shown when state is error) */
  error?: string;
  /** Field state */
  state?: InputFieldState;
}

/**
 * InputField component
 *
 * States: Default, Error, Disabled
 * Supports optional label, description, and error message.
 */
export const InputField: React.FC<InputFieldProps> = ({
  label,
  description,
  error,
  state = 'default',
  disabled,
  className,
  ...rest
}) => {
  const isDisabled = state === 'disabled' || disabled;
  const isError = state === 'error';

  const classNames = [
    'sds-input-field',
    isError ? 'sds-input-field--error' : '',
    isDisabled ? 'sds-input-field--disabled' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames}>
      {label && <label className="sds-input-field__label">{label}</label>}
      {description && <p className="sds-input-field__description">{description}</p>}
      <input
        className="sds-input-field__input"
        disabled={isDisabled}
        aria-invalid={isError || undefined}
        {...rest}
      />
      {isError && error && <p className="sds-input-field__error">{error}</p>}
    </div>
  );
};
