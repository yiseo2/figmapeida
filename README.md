# Simple Design System (SDS)

Figma "Simple Design System (Community)" 파일 기반으로 구축된 React + TypeScript 컴포넌트 라이브러리입니다.

## 설치

```bash
npm install @sds/design-system
```

## 사용법

### 디자인 토큰 가져오기

CSS 변수가 자동으로 로드됩니다.

```tsx
import '@sds/design-system';
```

또는 토큰만 별도로:

```tsx
import '@sds/design-system/src/tokens/variables.css';
```

### Button

3가지 variant (Primary, Neutral, Subtle) × 2가지 size (Medium, Small)을 지원합니다.

```tsx
import { Button } from '@sds/design-system';

// Primary (기본)
<Button label="확인" />

// Neutral
<Button variant="neutral" label="취소" />

// Subtle
<Button variant="subtle" label="건너뛰기" />

// Small 사이즈
<Button size="small" label="작은 버튼" />

// 아이콘 포함
<Button iconStart={<StarIcon />} label="즐겨찾기" />

// Disabled
<Button disabled label="비활성" />
```

### ButtonDanger

파괴적(destructive) 액션용 버튼입니다. 2가지 variant (Primary, Subtle)을 지원합니다.

```tsx
import { ButtonDanger } from '@sds/design-system';

<ButtonDanger label="삭제" />
<ButtonDanger variant="subtle" label="삭제 취소" />
```

### IconButton

원형 아이콘 전용 버튼입니다. Medium(44px), Small(36px) 사이즈를 지원합니다.

```tsx
import { IconButton } from '@sds/design-system';

<IconButton icon={<StarIcon />} aria-label="즐겨찾기" />
<IconButton variant="neutral" icon={<SettingsIcon />} aria-label="설정" />
<IconButton variant="subtle" size="small" icon={<CloseIcon />} aria-label="닫기" />
```

### ButtonGroup

여러 버튼을 그룹으로 묶어 정렬합니다. 5가지 align 옵션을 지원합니다.

```tsx
import { Button, ButtonGroup } from '@sds/design-system';

// Justify (기본 — 균등 분배)
<ButtonGroup>
  <Button variant="subtle" label="취소" />
  <Button label="확인" />
</ButtonGroup>

// Start (왼쪽 정렬)
<ButtonGroup align="start">
  <Button variant="subtle" label="취소" />
  <Button label="확인" />
</ButtonGroup>

// End (오른쪽 정렬)
<ButtonGroup align="end">
  <Button variant="subtle" label="취소" />
  <Button label="확인" />
</ButtonGroup>

// Center (가운데 정렬)
<ButtonGroup align="center">
  <Button variant="subtle" label="취소" />
  <Button label="확인" />
</ButtonGroup>

// Stack (세로 쌓기)
<ButtonGroup align="stack">
  <Button label="확인" />
  <Button variant="subtle" label="취소" />
</ButtonGroup>
```

## 디자인 토큰

모든 스타일 값은 CSS Custom Properties로 정의되어 있습니다.

| 카테고리 | 변수 예시 | 기본값 |
|---------|----------|-------|
| Brand 배경 | `--sds-color-background-brand-default` | `#2c2c2c` |
| Danger 배경 | `--sds-color-background-danger-default` | `#ec221f` |
| 간격 | `--sds-size-space-200` | `8px` |
| 둥글기 | `--sds-size-radius-200` | `8px` |
| 폰트 | `--sds-typography-body-font-family` | `Inter` |

전체 토큰 목록은 `src/tokens/variables.css`를 참조하세요.

## 프로젝트 구조

```
src/
  tokens/
    variables.css       # CSS 변수 (디자인 토큰)
    index.ts
  components/
    Button/             # 기본 버튼
    ButtonDanger/       # 위험 액션 버튼
    IconButton/         # 원형 아이콘 버튼
    ButtonGroup/        # 버튼 그룹 레이아웃
  index.ts              # 전체 export
```

## 기술 스택

- React 18
- TypeScript
- CSS Custom Properties (CSS Variables)

## 라이선스

MIT
