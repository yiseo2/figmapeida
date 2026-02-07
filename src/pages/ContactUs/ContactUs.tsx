import React, { useState } from 'react';
import './ContactUs.css';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { InputField } from '../../components/InputField';
import { Button } from '../../components/Button';
import { ButtonGroup } from '../../components/ButtonGroup';

/**
 * ContactUs page
 *
 * Figma Node: "Contact Us" (3002:100551)
 * Structure: Header → Hero Form (Title + Subtitle + Form Contact) → Footer
 *
 * All design tokens are mapped 1:1 from Figma variables to SDS CSS custom properties.
 * No hardcoded colors, typography, or spacing values.
 */
export const ContactUs: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  /* ---- Nav items: Products active, + Link (Figma 노드 그대로) ---- */
  const navItems = [
    { label: 'Products', active: true },
    { label: 'Solutions' },
    { label: 'Community' },
    { label: 'Resources' },
    { label: 'Pricing' },
    { label: 'Contact' },
    { label: 'Link' },
  ];

  return (
    <div className="contact-page">
      {/* ===== Header (Figma: I3002:100551;175:5194) ===== */}
      <Header navItems={navItems} />

      {/* ===== Hero Form (Figma: I3002:100551;175:5195) ===== */}
      <section className="contact-hero-form">
        {/* Text Content Title (Figma: 2153:6049) */}
        <div className="contact-hero-form__text">
          <h1 className="contact-hero-form__title">Title</h1>
          <p className="contact-hero-form__subtitle">Subtitle</p>
        </div>

        {/* Form Contact (Figma: 2143:13764) */}
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {/* Name — InputField (Figma: Placeholder state) */}
          <InputField
            label="Name"
            name="name"
            placeholder="Value"
            value={form.name}
            onChange={handleChange}
          />

          {/* Surname — InputField (Figma: 2106:7349) */}
          <InputField
            label="Surname"
            name="surname"
            placeholder="Value"
            value={form.surname}
            onChange={handleChange}
          />

          {/* Email — InputField (Figma: Placeholder state) */}
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="Value"
            value={form.email}
            onChange={handleChange}
          />

          {/* Message — TextareaField (Figma: 589:17838) */}
          <div className="contact-form__textarea-wrap">
            <label className="contact-form__textarea-label">Message</label>
            <textarea
              className="contact-form__textarea"
              name="message"
              placeholder="Value"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          {/* Button Group — Submit (Figma: 373:10990, justify align) */}
          <div className="contact-form__actions">
            <ButtonGroup align="justify">
              <Button label="Submit" type="submit" />
            </ButtonGroup>
          </div>
        </form>
      </section>

      {/* ===== Footer (Figma: I3002:100551;175:5196) ===== */}
      <Footer />
    </div>
  );
};
