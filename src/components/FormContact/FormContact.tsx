import React, { useState } from 'react';
import { InputField } from '../InputField';
import { TextareaField } from '../TextareaField';
import { Button } from '../Button';
import './FormContact.css';

export interface FormContactField {
  name: string;
  email: string;
  surname?: string;
  message: string;
}

export interface FormContactProps {
  /** Form title */
  title?: string;
  /** Form description */
  description?: string;
  /** Submit button label */
  submitLabel?: string;
  /** Called when form submits with field values */
  onSubmit?: (data: FormContactField) => void;
  /** Whether the form is in a loading/submitting state */
  loading?: boolean;
  /** Additional CSS class */
  className?: string;
  /** Show the surname field (default: true) */
  showSurname?: boolean;
}

/**
 * FormContact component
 *
 * Pre-composed contact form with Name, Surname (optional), Email,
 * Message (textarea), and a submit button.
 * Built using InputField, TextareaField, and Button components.
 */
export const FormContact: React.FC<FormContactProps> = ({
  title,
  description,
  submitLabel = 'Submit',
  onSubmit,
  loading = false,
  className,
  showSurname = true,
}) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({
      name,
      surname: showSurname ? surname : undefined,
      email,
      message,
    });
  };

  return (
    <form
      className={['sds-form-contact', className].filter(Boolean).join(' ')}
      onSubmit={handleSubmit}
      noValidate
    >
      {title && <h3 className="sds-form-contact__title">{title}</h3>}
      {description && <p className="sds-form-contact__description">{description}</p>}

      {/* Name + Surname row */}
      {showSurname ? (
        <div className="sds-form-contact__row">
          <InputField
            label="Name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            label="Surname"
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
      ) : (
        <InputField
          label="Name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}

      {/* Email */}
      <InputField
        label="Email"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Message */}
      <TextareaField
        label="Message"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
      />

      {/* Submit */}
      <div className="sds-form-contact__submit">
        <Button
          variant="primary"
          size="medium"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Sending...' : submitLabel}
        </Button>
      </div>
    </form>
  );
};
