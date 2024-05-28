# [ UI 만들기 ]

## 폴더 구조

##### app

NEXT.js는 최소한으로 사용하는 것을 목표. components에 집중할 예정.

- [..item] : [Catch-all Segments](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments)를 사용
- routes.ts:
  - routes: 배열로 만들어 뎁스를 여러개 만드는 보다는 객체로 만들어서 플랫하게 하나의 뎁스만 가져가고 children으로 그 밑에 라우터로 접근하게끔 해서 성능 향상을 기대함.
  - ParentRoute와 ChildRoute의 차이는 children이 배열이냐 ReactElement냐를 바탕으로 isParentRoute함수 만들었음

## 컴포넌트 소개

### 1. 아코디언
