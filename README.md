# 커머랩 (commerlab2)

이커머스 셀러용 실전 전자책 「스케일업」(289,000원) 판매 사이트.
백엔드 없는 정적 HTML — 결제는 토스 송금 딥링크 + 문자 입금 확인.

## 페이지

| 파일 | 주소 | 역할 |
|---|---|---|
| index.html | / | 메인 (배너·판매 카드) |
| scaleup.html | /scaleup | 상품 상세 + 구매 모달 |
| policy.html | /policy | 이용약관·개인정보·환불 정책 |
| admin.html | /admin | 오너용 페이지 편집기 (브라우저 로컬 저장) |
| 404.html | — | 커스텀 404 |

## 배포

- Vercel 정적 서빙: https://commerlab2.vercel.app (main 푸시 = 배포)
- `vercel.json`의 `cleanUrls: true`로 확장자 없는 주소(`/scaleup`)가 정식 URL.
  sitemap.xml·canonical도 확장자 없는 주소 기준.
- 빌드 과정 없음 — html 수정 후 푸시하면 끝.

## 주의

- 이 repo에는 Node/Next.js가 없다. package.json이 다시 생기면 다른 프로젝트 파일이 섞여 들어온 것이니 의심할 것 (2026-07 sunghoon 프로필 사이트가 zip 업로드로 혼입됐던 전례 있음).
