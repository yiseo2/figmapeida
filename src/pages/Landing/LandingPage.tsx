import React from 'react';
import './LandingPage.css';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { ButtonGroup } from '../../components/ButtonGroup';

/* ================================================================
 * SVG Icons for Card Grid
 * 피그마 Card 노드의 아이콘 에셋에 대응
 * ================================================================ */

const CodeBracketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const PenToolIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>
);

const ChartBarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="12" width="4" height="9" rx="1" />
    <rect x="10" y="7" width="4" height="14" rx="1" />
    <rect x="17" y="3" width="4" height="18" rx="1" />
  </svg>
);

const ClipboardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <path d="M9 14l2 2 4-4" />
  </svg>
);

const MegaphoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    <path d="M8 9h8M8 13h6" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" />
    <path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
);

/* ================================================================
 * Image Placeholder
 * 피그마 Image 노드의 placeholder에 대응 (#E3E3E3)
 * background-neutral-tertiary 토큰 사용
 * ================================================================ */
const ImagePlaceholder = () => (
  <svg
    className="landing-image-placeholder__svg"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="8" y="12" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2" />
    <circle cx="17" cy="21" r="3" stroke="currentColor" strokeWidth="2" />
    <path d="M8 30l8-6 6 4 8-8 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * LandingPage — 교육 커리큘럼 랜딩페이지
 *
 * 피그마 Node: "교육 커리큘럼 랜딩페이지" (46:916)
 * 구조: Header → Hero Image → Panel Image Double → Card Grid Icon → Footer
 *
 * 모든 스타일 값은 SDS 디자인 토큰(CSS Custom Properties)만 사용.
 * Heading/Subheading 토큰 없이 기존 토큰(title-hero, subtitle, body, scale)으로 대체.
 */
export const LandingPage: React.FC = () => {
  /* ---- Header nav items (피그마: 46:712) ---- */
  const navItems = [
    { label: '커리큘럼', active: true },
    { label: '강사진' },
    { label: '커뮤니티' },
    { label: '후기' },
    { label: '요금제' },
    { label: '문의' },
  ];

  /* ---- Card data (피그마: 46:1279 Card Grid Icon) ---- */
  const cards = [
    {
      icon: <CodeBracketIcon />,
      title: '프론트엔드 개발',
      description:
        'React, TypeScript, Next.js 등 최신 프론트엔드 기술 스택을 실습 중심으로 학습합니다. 포트폴리오 프로젝트를 통해 실무 역량을 갖춥니다.',
    },
    {
      icon: <PenToolIcon />,
      title: 'UX/UI 디자인',
      description:
        '사용자 리서치부터 와이어프레임, 프로토타이핑까지 UX 디자인의 전 과정을 Figma와 함께 체계적으로 배웁니다.',
    },
    {
      icon: <ChartBarIcon />,
      title: '데이터 분석',
      description:
        'Python과 SQL을 활용한 데이터 분석 기초부터 시각화, 머신러닝 입문까지. 데이터 기반 의사결정 능력을 키웁니다.',
    },
    {
      icon: <ClipboardIcon />,
      title: '프로덕트 매니지먼트',
      description:
        '제품 기획부터 출시, 성장까지 PM의 핵심 역량을 실제 케이스 스터디와 함께 학습합니다. 애자일 방법론도 포함됩니다.',
    },
    {
      icon: <MegaphoneIcon />,
      title: '콘텐츠 마케팅',
      description:
        'SEO, 소셜 미디어, 브랜딩 전략까지 디지털 마케팅의 핵심을 배웁니다. 실제 캠페인 기획 실습이 포함됩니다.',
    },
    {
      icon: <UsersIcon />,
      title: '팀 프로젝트 실습',
      description:
        '다양한 직군의 수강생들과 팀을 이루어 실제 서비스를 기획하고 개발합니다. 협업 경험과 네트워킹을 동시에 쌓으세요.',
    },
  ];

  /* ---- Footer columns (피그마: 26:759) ---- */
  const footerColumns = [
    {
      title: '커리큘럼',
      links: [
        { label: '프론트엔드 개발' },
        { label: 'UX/UI 디자인' },
        { label: '데이터 분석' },
        { label: '프로덕트 매니지먼트' },
        { label: '콘텐츠 마케팅' },
        { label: '팀 프로젝트' },
        { label: '어플리케이션 출시' },
      ],
    },
    {
      title: '학습 지원',
      links: [
        { label: '멘토링 프로그램' },
        { label: '포트폴리오 리뷰' },
        { label: '취업 연계' },
        { label: '스터디 그룹' },
        { label: '온라인 Q&A' },
        { label: '학습 로드맵' },
        { label: '강사진 소개' },
      ],
    },
    {
      title: '리소스',
      links: [
        { label: '블로그' },
        { label: '수강 후기' },
        { label: 'FAQ' },
        { label: '이용약관' },
        { label: '개인정보처리방침' },
        { label: '마케팅활용방침' },
        { label: '고객센터' },
      ],
    },
  ];

  return (
    <div className="landing-page">
      {/* ===== Header (피그마: 46:712) ===== */}
      <Header
        navItems={navItems}
        signInLabel="커리큘럼 보기"
        registerLabel="무료체험 하기"
      />

      {/* ===== Hero Image Section (피그마: 46:1607) ===== */}
      <section className="landing-hero">
        <div className="landing-hero__text">
          <h1 className="landing-hero__title">미래를 설계하는 교육</h1>
          <p className="landing-hero__subtitle">
            실무 중심 커리큘럼으로 성장하세요
          </p>
        </div>
        <ButtonGroup align="center">
          <Button variant="neutral" label="커리큘럼 보기" />
          <Button variant="primary" label="수강신청" />
        </ButtonGroup>
      </section>

      {/* ===== Panel Image Double (피그마: 46:1566) ===== */}
      <section className="landing-panel">
        <div className="landing-panel__grid">
          <div className="landing-image-placeholder">
            <ImagePlaceholder />
          </div>
          <div className="landing-image-placeholder">
            <ImagePlaceholder />
          </div>
        </div>
      </section>

      {/* ===== Card Grid Icon (피그마: 46:1279) ===== */}
      <section className="landing-cards">
        <div className="landing-cards__header">
          <h2 className="landing-cards__heading">커리큘럼 소개</h2>
          <p className="landing-cards__subheading">
            당신의 목표에 맞는 과정을 선택하세요
          </p>
        </div>

        <div className="landing-cards__grid">
          {cards.map((card) => (
            <div key={card.title} className="landing-card">
              <div className="landing-card__icon">{card.icon}</div>
              <div className="landing-card__body">
                <h3 className="landing-card__title">{card.title}</h3>
                <p className="landing-card__description">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Footer (피그마: 26:759) ===== */}
      <Footer columns={footerColumns} />
    </div>
  );
};
