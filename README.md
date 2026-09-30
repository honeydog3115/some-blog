# InsightLog | 모던 Jekyll 리뷰 블로그

직장인 및 간편한 독자를 위한 심플하고 모던한 스타일의 블로그 테마입니다. 마크다운의 Front Matter 옵션만으로 각 카테고리별로 최적화된 특별한 컴포넌트가 자동으로 생성됩니다.

## 🌟 카테고리별 주요 기능

### 1. 📱 제품 리뷰 (`category: product`)
- 별점 시스템 (0.0 ~ 5.0 점수 표기)
- 장점(Pros) & 단점(Cons) 리스트 박스
- 한 줄 총평 배너

```yaml
---
layout: post
title: "로지텍 MX Master 3S 리뷰"
category: product
product:
  name: "MX Master 3S"
  price: "139,000원"
  rating: 4.5
  verdict: "생산성을 높여주는 최고의 마우스"
  pros: ["무소음 클릭", "초고속 무한 휠"]
  cons: ["손이 작은 사용자에게는 다소 큼"]
---
```

---

### 2. 🎬 영화 리뷰 (`category: movie`)
- 상단 히어로 영역에 눈에 띄는 **한 줄 평 (One-Liner)** 배너
- 감독, 장르, 평점 정보

```yaml
---
layout: post
title: "영화 인터스텔라 감상평"
category: movie
movie:
  one_liner: "사랑은 시공간을 초월해 우리가 감지할 수 있는 유일한 매개체다."
  director: "크리스토퍼 놀란"
  genre: "SF / 드라마"
  score: "5.0 / 5.0"
---
```

---

### 3. 🍳 음식 & 레시피 (`category: food`)
- 조리 시간, 난이도, 분량 정보 메타 카드
- 한눈에 보는 준비 재료 태그 리스트 & Step-by-Step 조리 순서

```yaml
---
layout: post
title: "15분 투움바 파스타 레시피"
category: food
recipe:
  prep_time: "15분"
  difficulty: "쉬움"
  servings: "1~2인분"
  ingredients: ["파스타 면 150g", "생크림 200ml", "새우 8마리"]
  steps: ["소스를 준비합니다.", "면을 삶습니다.", "함께 볶아 완성합니다."]
---
```

---

### 4. ⚡ 애니 리뷰 (`category: anime`)
- 네온 그라데이션 및 애니메이션이 적용된 화려한 카멜레온 히어로 카드
- 제작사, 화수, 방영 정보 및 **관전 포인트(Highlight)**

```yaml
---
layout: post
title: "귀멸의 칼날 무한성 편"
category: anime
anime:
  title: "귀멸의 칼날: 무한성 편"
  studio: "ufotable"
  highlight: "유포테이블의 미친 3D 공간 연출과 작화!"
---
```

---

## 🎨 독자 경험 (UX) 기능
- **다크모드 / 라이트모드 전환**: 우측 상단 버튼으로 토글 가능 (설정 자동 저장)
- **실시간 게시글 검색**: 메인 페이지에서 키워드/카테고리/제목 실시간 필터링
- **예상 읽기 시간(Read Time)**: 글 상단에 분 단위 자동 표시
