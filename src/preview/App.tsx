import React, { useState } from 'react';
import '../tokens/variables.css';
import './preview.css';

import { Button } from '../components/Button';
import { ButtonDanger } from '../components/ButtonDanger';
import { IconButton } from '../components/IconButton';
import { ButtonGroup } from '../components/ButtonGroup';
import { InputField } from '../components/InputField';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactUs } from '../pages/ContactUs';
import { LandingPage } from '../pages/Landing';

/* Simple SVG icons for demo */
const StarIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1.5l1.76 3.57 3.94.57-2.85 2.78.67 3.93L8 10.67l-3.52 1.68.67-3.93L2.3 5.64l3.94-.57L8 1.5z" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4l8 8M12 4l-8 8" />
  </svg>
);

const SettingsIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 10a2 2 0 100-4 2 2 0 000 4z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M6.7 1.5a1 1 0 00-.98.8l-.26 1.3a5.02 5.02 0 00-1.12.65l-1.25-.42a1 1 0 00-1.1.46l-1.3 2.25a1 1 0 00.13 1.17l1 .96a5 5 0 000 1.26l-1 .96a1 1 0 00-.13 1.17l1.3 2.25a1 1 0 001.1.46l1.25-.42c.34.26.72.48 1.12.65l.26 1.3a1 1 0 00.98.8h2.6a1 1 0 00.98-.8l.26-1.3c.4-.17.78-.39 1.12-.65l1.25.42a1 1 0 001.1-.46l1.3-2.25a1 1 0 00-.13-1.17l-1-.96a5 5 0 000-1.26l1-.96a1 1 0 00.13-1.17l-1.3-2.25a1 1 0 00-1.1-.46l-1.25.42a5.02 5.02 0 00-1.12-.65l-.26-1.3a1 1 0 00-.98-.8H6.7zM8 11a3 3 0 100-6 3 3 0 000 6z" />
  </svg>
);

export const App: React.FC = () => {
  const [page, setPage] = useState<'components' | 'contact' | 'landing'>('landing');

  /* Switcher bar styles */
  const switcherStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: 24,
    right: 24,
    zIndex: 9999,
    display: 'flex',
    gap: 8,
  };
  const btnBase: React.CSSProperties = {
    padding: '10px 20px',
    borderRadius: 8,
    border: '1px solid #d9d9d9',
    fontFamily: 'Inter, sans-serif',
    fontSize: 14,
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
  };
  const btnLight: React.CSSProperties = { ...btnBase, background: '#fff', color: '#1e1e1e' };
  const btnDark: React.CSSProperties = { ...btnBase, background: '#2c2c2c', color: '#f5f5f5' };

  const Switcher = ({ current }: { current: string }) => (
    <div style={switcherStyle}>
      {current !== 'landing' && (
        <button onClick={() => setPage('landing')} style={btnDark}>Landing</button>
      )}
      {current !== 'contact' && (
        <button onClick={() => setPage('contact')} style={btnLight}>Contact</button>
      )}
      {current !== 'components' && (
        <button onClick={() => setPage('components')} style={btnLight}>Components</button>
      )}
    </div>
  );

  /* Landing page (교육 커리큘럼) */
  if (page === 'landing') {
    return (
      <div>
        <Switcher current="landing" />
        <LandingPage />
      </div>
    );
  }

  /* Contact Us 페이지 */
  if (page === 'contact') {
    return (
      <div>
        <Switcher current="contact" />
        <ContactUs />
      </div>
    );
  }

  return (
    <div className="preview">
      {/* Page switcher */}
      <Switcher current="components" />

      {/* Header */}
      <header className="preview__header">
        <h1 className="preview__title">Simple Design System</h1>
        <p className="preview__subtitle">
          Figma "Simple Design System (Community)" 기반 React 컴포넌트 라이브러리
        </p>
      </header>

      {/* ===== Color Tokens ===== */}
      <section className="section">
        <h2 className="section__title">Color Tokens</h2>
        <p className="section__description">Figma Variables에서 추출한 디자인 토큰</p>

        <div className="demo-box">
          <div className="demo-box__label">Brand</div>
          <div className="token-grid">
            <ColorToken name="--sds-color-background-brand-default" value="#2c2c2c" />
            <ColorToken name="--sds-color-background-brand-hover" value="#1e1e1e" />
            <ColorToken name="--sds-color-text-brand-on-brand" value="#f5f5f5" />
          </div>
        </div>

        <div className="demo-box">
          <div className="demo-box__label">Neutral</div>
          <div className="token-grid">
            <ColorToken name="--sds-color-background-neutral-tertiary" value="#e3e3e3" />
            <ColorToken name="--sds-color-border-neutral-secondary" value="#767676" />
            <ColorToken name="--sds-color-text-neutral-default" value="#303030" />
          </div>
        </div>

        <div className="demo-box">
          <div className="demo-box__label">Danger</div>
          <div className="token-grid">
            <ColorToken name="--sds-color-background-danger-default" value="#ec221f" />
            <ColorToken name="--sds-color-background-danger-hover" value="#c00f0c" />
            <ColorToken name="--sds-color-text-danger-on-danger" value="#fee9e7" />
          </div>
        </div>

        <div className="demo-box">
          <div className="demo-box__label">Disabled</div>
          <div className="token-grid">
            <ColorToken name="--sds-color-background-disabled-default" value="#d9d9d9" />
            <ColorToken name="--sds-color-text-disabled-on-disabled" value="#b3b3b3" />
            <ColorToken name="--sds-color-border-disabled-default" value="#b3b3b3" />
          </div>
        </div>
      </section>

      {/* ===== Spacing Tokens ===== */}
      <section className="section">
        <h2 className="section__title">Spacing &amp; Radius</h2>
        <p className="section__description">공간 및 둥글기 토큰</p>

        <div className="demo-box">
          <div className="token-grid">
            <SpacingToken name="space-100" value="4px" />
            <SpacingToken name="space-200" value="8px" />
            <SpacingToken name="space-300" value="12px" />
            <SpacingToken name="space-400" value="16px" />
            <SpacingToken name="radius-200" value="8px" />
            <SpacingToken name="radius-full" value="9999px" />
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ===== Button ===== */}
      <section className="section">
        <h2 className="section__title">Button</h2>
        <p className="section__description">
          variant: Primary / Neutral / Subtle &nbsp;|&nbsp; size: Medium / Small &nbsp;|&nbsp; state: Default / Hover / Disabled
        </p>

        <div className="demo-box">
          <div className="demo-box__label">Medium</div>

          <div className="row">
            <span className="row-label">Primary</span>
            <Button label="Button" />
            <Button label="Button" iconStart={<StarIcon />} />
            <Button label="Button" iconEnd={<CloseIcon />} />
            <Button label="Button" disabled />
          </div>

          <div className="row">
            <span className="row-label">Neutral</span>
            <Button variant="neutral" label="Button" />
            <Button variant="neutral" label="Button" iconStart={<StarIcon />} />
            <Button variant="neutral" label="Button" iconEnd={<CloseIcon />} />
            <Button variant="neutral" label="Button" disabled />
          </div>

          <div className="row">
            <span className="row-label">Subtle</span>
            <Button variant="subtle" label="Button" />
            <Button variant="subtle" label="Button" iconStart={<StarIcon />} />
            <Button variant="subtle" label="Button" iconEnd={<CloseIcon />} />
            <Button variant="subtle" label="Button" disabled />
          </div>
        </div>

        <div className="demo-box">
          <div className="demo-box__label">Small</div>

          <div className="row">
            <span className="row-label">Primary</span>
            <Button size="small" label="Button" />
            <Button size="small" label="Button" iconStart={<StarIcon />} />
            <Button size="small" label="Button" disabled />
          </div>

          <div className="row">
            <span className="row-label">Neutral</span>
            <Button size="small" variant="neutral" label="Button" />
            <Button size="small" variant="neutral" label="Button" iconStart={<StarIcon />} />
            <Button size="small" variant="neutral" label="Button" disabled />
          </div>

          <div className="row">
            <span className="row-label">Subtle</span>
            <Button size="small" variant="subtle" label="Button" />
            <Button size="small" variant="subtle" label="Button" iconStart={<StarIcon />} />
            <Button size="small" variant="subtle" label="Button" disabled />
          </div>
        </div>
      </section>

      {/* ===== Button Danger ===== */}
      <section className="section">
        <h2 className="section__title">Button Danger</h2>
        <p className="section__description">
          destructive 액션용 &nbsp;|&nbsp; variant: Primary / Subtle &nbsp;|&nbsp; size: Medium / Small
        </p>

        <div className="demo-box">
          <div className="demo-box__label">Medium</div>

          <div className="row">
            <span className="row-label">Primary</span>
            <ButtonDanger label="Button" />
            <ButtonDanger label="Button" iconStart={<StarIcon />} />
            <ButtonDanger label="Button" disabled />
          </div>

          <div className="row">
            <span className="row-label">Subtle</span>
            <ButtonDanger variant="subtle" label="Button" />
            <ButtonDanger variant="subtle" label="Button" iconStart={<StarIcon />} />
            <ButtonDanger variant="subtle" label="Button" disabled />
          </div>
        </div>

        <div className="demo-box">
          <div className="demo-box__label">Small</div>

          <div className="row">
            <span className="row-label">Primary</span>
            <ButtonDanger size="small" label="Button" />
            <ButtonDanger size="small" label="Button" disabled />
          </div>

          <div className="row">
            <span className="row-label">Subtle</span>
            <ButtonDanger size="small" variant="subtle" label="Button" />
            <ButtonDanger size="small" variant="subtle" label="Button" disabled />
          </div>
        </div>
      </section>

      {/* ===== Icon Button ===== */}
      <section className="section">
        <h2 className="section__title">Icon Button</h2>
        <p className="section__description">
          원형 아이콘 전용 버튼 &nbsp;|&nbsp; Medium: 44px / Small: 36px
        </p>

        <div className="demo-box">
          <div className="demo-box__label">Medium (44px)</div>

          <div className="row">
            <span className="row-label">Primary</span>
            <IconButton icon={<StarIcon />} aria-label="Star" />
            <IconButton icon={<SettingsIcon />} aria-label="Settings" />
            <IconButton icon={<CloseIcon />} aria-label="Close" disabled />
          </div>

          <div className="row">
            <span className="row-label">Neutral</span>
            <IconButton variant="neutral" icon={<StarIcon />} aria-label="Star" />
            <IconButton variant="neutral" icon={<SettingsIcon />} aria-label="Settings" />
            <IconButton variant="neutral" icon={<CloseIcon />} aria-label="Close" disabled />
          </div>

          <div className="row">
            <span className="row-label">Subtle</span>
            <IconButton variant="subtle" icon={<StarIcon />} aria-label="Star" />
            <IconButton variant="subtle" icon={<SettingsIcon />} aria-label="Settings" />
            <IconButton variant="subtle" icon={<CloseIcon />} aria-label="Close" disabled />
          </div>
        </div>

        <div className="demo-box">
          <div className="demo-box__label">Small (36px)</div>

          <div className="row">
            <span className="row-label">Primary</span>
            <IconButton size="small" icon={<StarIcon />} aria-label="Star" />
            <IconButton size="small" icon={<SettingsIcon />} aria-label="Settings" />
            <IconButton size="small" icon={<CloseIcon />} aria-label="Close" disabled />
          </div>

          <div className="row">
            <span className="row-label">Neutral</span>
            <IconButton size="small" variant="neutral" icon={<StarIcon />} aria-label="Star" />
            <IconButton size="small" variant="neutral" icon={<SettingsIcon />} aria-label="Settings" />
            <IconButton size="small" variant="neutral" icon={<CloseIcon />} aria-label="Close" disabled />
          </div>

          <div className="row">
            <span className="row-label">Subtle</span>
            <IconButton size="small" variant="subtle" icon={<StarIcon />} aria-label="Star" />
            <IconButton size="small" variant="subtle" icon={<SettingsIcon />} aria-label="Settings" />
            <IconButton size="small" variant="subtle" icon={<CloseIcon />} aria-label="Close" disabled />
          </div>
        </div>
      </section>

      {/* ===== Button Group ===== */}
      <section className="section">
        <h2 className="section__title">Button Group</h2>
        <p className="section__description">
          버튼 그룹 정렬 &nbsp;|&nbsp; Justify / Start / End / Center / Stack
        </p>

        <div className="demo-box">
          <div className="demo-box__label">Justify (균등 분배)</div>
          <ButtonGroup align="justify">
            <Button variant="subtle" label="Cancel" />
            <Button label="Confirm" />
          </ButtonGroup>
        </div>

        <div className="demo-box">
          <div className="demo-box__label">Start (왼쪽 정렬)</div>
          <ButtonGroup align="start">
            <Button variant="subtle" label="Cancel" />
            <Button label="Confirm" />
          </ButtonGroup>
        </div>

        <div className="demo-box">
          <div className="demo-box__label">End (오른쪽 정렬)</div>
          <ButtonGroup align="end">
            <Button variant="subtle" label="Cancel" />
            <Button label="Confirm" />
          </ButtonGroup>
        </div>

        <div className="demo-box">
          <div className="demo-box__label">Center (가운데 정렬)</div>
          <ButtonGroup align="center">
            <Button variant="subtle" label="Cancel" />
            <Button label="Confirm" />
          </ButtonGroup>
        </div>

        <div className="demo-box">
          <div className="demo-box__label">Stack (세로 쌓기)</div>
          <div style={{ maxWidth: 280 }}>
            <ButtonGroup align="stack">
              <Button label="Confirm" />
              <Button variant="subtle" label="Cancel" />
            </ButtonGroup>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ===== Input Field ===== */}
      <section className="section">
        <h2 className="section__title">Input Field</h2>
        <p className="section__description">
          state: Default / Error / Disabled &nbsp;|&nbsp; Label, Description, Error message 지원
        </p>

        <div className="demo-box">
          <div className="demo-box__label">Default</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
            <InputField label="Label" placeholder="Placeholder" />
            <InputField label="Label" defaultValue="Value" />
            <InputField label="Label" description="Description" placeholder="Placeholder" />
          </div>
        </div>

        <div className="demo-box">
          <div className="demo-box__label">Error</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <InputField label="Label" state="error" placeholder="Placeholder" error="Error message" />
            <InputField label="Label" state="error" defaultValue="Value" error="Error message" />
          </div>
        </div>

        <div className="demo-box">
          <div className="demo-box__label">Disabled</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <InputField label="Label" state="disabled" placeholder="Placeholder" />
            <InputField label="Label" state="disabled" defaultValue="Value" />
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ===== Header ===== */}
      <section className="section">
        <h2 className="section__title">Header</h2>
        <p className="section__description">
          Desktop 네비게이션 헤더 &nbsp;|&nbsp; NavigationPill + Auth 버튼
        </p>

        <div className="demo-box" style={{ padding: 0, overflow: 'hidden' }}>
          <Header />
        </div>
      </section>

      <hr className="divider" />

      {/* ===== Footer ===== */}
      <section className="section">
        <h2 className="section__title">Footer</h2>
        <p className="section__description">
          로고, 소셜 아이콘, 링크 컬럼 레이아웃
        </p>

        <div className="demo-box" style={{ padding: 0, overflow: 'hidden' }}>
          <Footer />
        </div>
      </section>
    </div>
  );
};

/* ----- Helper components for token display ----- */

const ColorToken: React.FC<{ name: string; value: string }> = ({ name, value }) => (
  <div className="token-card">
    <div className="token-swatch" style={{ backgroundColor: value }} />
    <div className="token-name">{name}</div>
    <div className="token-value">{value}</div>
  </div>
);

const SpacingToken: React.FC<{ name: string; value: string }> = ({ name, value }) => {
  const numVal = parseInt(value);
  const displaySize = Math.min(numVal, 40);
  return (
    <div className="token-card">
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
        <div
          style={{
            width: displaySize,
            height: displaySize,
            minWidth: 4,
            minHeight: 4,
            backgroundColor: '#2c2c2c',
            borderRadius: name.includes('radius') ? displaySize / 2 : 2,
          }}
        />
        <span style={{ fontSize: 20, fontWeight: 600 }}>{value}</span>
      </div>
      <div className="token-name">--sds-size-{name}</div>
    </div>
  );
};
