/**
 * Simple Design System
 *
 * A React component library built from Figma design tokens.
 */

/* Design Tokens */
import './tokens/variables.css';

/* Components */
export { Button } from './components/Button';
export type { ButtonProps, ButtonVariant, ButtonSize } from './components/Button';

export { ButtonDanger } from './components/ButtonDanger';
export type { ButtonDangerProps, ButtonDangerVariant, ButtonDangerSize } from './components/ButtonDanger';

export { IconButton } from './components/IconButton';
export type { IconButtonProps, IconButtonVariant, IconButtonSize } from './components/IconButton';

export { ButtonGroup } from './components/ButtonGroup';
export type { ButtonGroupProps, ButtonGroupAlign } from './components/ButtonGroup';

export { InputField } from './components/InputField';
export type { InputFieldProps, InputFieldState } from './components/InputField';

export { Header } from './components/Header';
export type { HeaderProps, NavItem } from './components/Header';

export { Footer } from './components/Footer';
export type { FooterProps, FooterLinkColumn, SocialLink } from './components/Footer';

export { TextareaField } from './components/TextareaField';
export type { TextareaFieldProps, TextareaFieldState } from './components/TextareaField';

export { FormContact } from './components/FormContact';
export type { FormContactProps, FormContactField } from './components/FormContact';
