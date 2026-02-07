import React from 'react';
import './TextareaField.css';

export type TextareaFieldState = 'default' | 'error' | 'disabled';

export interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Field label */
  label?: string;
  /** Helper description below the label */
  description?: string;
  /** Error message (shown when state is error) */
  error?: string;
  /** Hint text (shown below textarea in default state) */
  hint?: string;
  /** Field state */
  state?: TextareaFieldState;
}

/**
 * TextareaField component
 *
 * Multi-line text input with min-height 80px and vertical resize.
 * States: Default, Error, Disabled
 * Supports optional label, description, error, and hint text.
 */
export const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  description,
  error,
  hint,
  state = 'default',
  disabled,
  className,
  ...rest
}) => {
  const isDisabled = state === 'disabled' || disabled;
  const isError = state === 'error';

  const classNames = [
    'sds-textarea-field',
    isError ? 'sds-textarea-field--error' : '',
    isDisabled ? 'sds-textarea-field--disabled' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames}>
      {label && <label className="sds-textarea-field__label">{label}</label>}
      {description && <p className="sds-textarea-field__description">{description}</p>}
      <textarea
        className="sds-textarea-field__textarea"
        disabled={isDisabled}
        aria-invalid={isError || undefined}
        {...rest}
      />
      {isError && error && <p className="sds-textarea-field__error">{error}</p>}
      {!isError && hint && <p className="sds-textarea-field__hint">{hint}</p>}
    </div>
  );
};
