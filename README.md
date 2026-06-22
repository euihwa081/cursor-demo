# cursor-demo

회원 목록에서 이메일을 추출·검증하는 Node.js 유틸리티 데모 프로젝트입니다.

## 사용법

```bash
npm test
node src/index.js
```

## 릴리스 노트

### v1.0.0

회원 목록에서 이메일을 추출·검증하는 유틸리티 모듈과 테스트를 추가한 첫 릴리스입니다.

#### ✨ 기능

- `email.js` 모듈 추가
  - `extractEmails` — 회원 배열에서 이메일 주소 목록 추출
  - `isValidEmail` — RFC 5322 / WHATWG 기준 이메일 형식 검증
  - `getValidEmails` — 유효한 이메일만 필터링
  - `getInvalidEmails` — 형식이 잘못된 이메일만 추출
- `index.js`에 샘플 회원 데이터로 이메일 추출·검증 데모 연동
- Node.js 내장 `node:test` 기반 단위 테스트 추가 (`src/email.test.js`)
- `npm test` 스크립트를 `node --test src/email.test.js`로 설정

#### 🧹 기타

- 초기 `init` 커밋 이후 진입점(`index.js`)을 실행 가능한 코드로 정리
