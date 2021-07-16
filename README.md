## 초기 설정법

```
1. vscode 확장 프로그램 prettier 설치

2. vscode 설정에서 format on save 를 체크
 (저장 할때 자동 형식 저장이 불편하시면 따로 하셔도 됩니다.)

2. frontend 폴더 내의 package-lock.json 삭제

3. npm install

4. app.js 코드에 공백같은걸 넣어보고 저장

5. 저장 했을 때 frontend 폴더 내의 .prettierrc.json 내의 규칙대로 형식이 자동 저장되면 prettier가 적용된 상태입니다.

6. 추후에 프론트엔드 회의에서 prettier 규칙을 추가하고 싶으면 .prettierrc.json 을 수정하시면 됩니다.
```

~~eslint까지 적용하려 했는데 자꾸 적용이 잘 안돼서 이거는 더 알아보겠습니다.~~ (prettier 규칙에 맞게 추가 완료.)

---

## components 파일 규칙

이전에 react 를 배울 때 파일을 import 하기위해 한줄에 하나씩 import 방식보다 간편한 방식입니다.

## ex)

```js
import Main from './components/page/Main';
import CreateRoom from './components/page/CreateRoom';
import Play from './components/page/Play';
```

<center><h2>▼</h2></center></br>

```js
import { Main, CreateRoom, Play } from './components/page';
```

    1. 각 폴더마다, 생성할 때마다 index.js 를 생성
    2. 생성한 파일은 해당 폴더내의 index.js 안에서 export 를 해준다. (page/index.js 참조)

---

## scss 파일 규칙

    1. 일단 기본 설정이 담긴 base 폴더와 components 폴더가 있는데 각자 페이지 scss를 추가할 때 components 내에서 추가로 폴더를 만드시고 생성하시면 됩니다.

    2. 그리고 생성된 파일을 따로 react js 파일에서 불러올 필요없이 main.scss 에 import 하시면 자동 적용 됩니다.

    3. 파일이름 앞에 _붙은건 private 이라 main을 통해서만 사용하게 하는 구조

    4. 파일내에서 사용할 색상 변수 같은건 base/_variables.scss 내에 저장해놓고 사용

    5. 추가적인 문법사용 예시는 _main.scss 참조

---

## 전체 파일구조

- src
  (어느 depth를 기준으로 하위 폴더를 구성할지 정해서 page ,UI, scss/components 의 하위폴더를 생성하시면 됩니다.)
  - components
    - page (페이지 전환이 이루어지는 페이지들)
    - UI (페이지에 쓰일 컴포넌트들)
  - scss
    - base
    - components
    - main.scss (전체 scss 파일 저장)

---

## 추가로 유용한 툴

VSCode 확장 프로그램중

> ES7 React/Redux/GraphQL/React-Native snippets

이 있는데,

react내에서

nfn 을 치면 익명 화살표 함수가 자동생성,

rafce를 치면 import react 부터 해당파일 export 까지 자동으로 해주는 편한 툴입니다.

log 는 console.log 생성 등 다양한 기능들이 있으니 사용하시면서 찾아보시면 좋습니다.👍
