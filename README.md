# 배포된 사이트 주소

https://obscure-hamlet-27606.herokuapp.com/

# 배포 과정

## root 디렉토리

1. root에 package.json 생성
2. script에  
   ` "heroku-postbuild": "npm install --prefix client && npm install -prefix server && npm run build --prefix client "`  
   를 입력(헤로쿠에서 npm run start가 되기전에 실행되는 스크립트)
   (루트에 사용된 패키지와 서버/클라이언트에 사용된 패키지를 설치
3. script에  
   `start: node server/index.js 정의(해로쿠에 올라가면 이 스크립트를 실행)`
4. "main"밑에 헤로쿠에서 사용할 엔진 정보를 입력

```engines": {
    "node": "16.11.1",
    "npm": "8.0.0"
  },
```

## server/index.js

1. port를 process.env.PROT||2000으로 정의(배포가되면 PROT에 값이 할당됨)
2. 프로덕션 모드일때 해당 build폴더를 send하는 코드를 작성

```
// 프로덕션 모드
if (process.env.NODE_ENV === "production") {
  //프로덕션일 경우 해로쿠가 하단에 build 폴더를 보도록 한다.
  app.use(express.static("client/build"));
  //랜더링될 html 파일을 지정한다
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}
```

## heroku config

1. heroku cli를 설치하기위해 다음 링크에서 다운로드[heroku cli](https://devcenter.heroku.com/articles/heroku-cli)
   heroku -v 로 설치확인
2. hroku 홈페이지에서 프로잭트생성
3. heroku login => 아무키 입력=> 로그인창이 뜨면 로그인 진행
4. heroku create=> url과 해로쿠 git패이지가 자동생성
5. heroku git:clone -a 생성한 프로젝트 이름 입력
6. git add . => git commit -m "message" => git push heroku main 으로 자동배포 실시

# 파일구조

```javascript
|-client
    |--src 			--source폴더
        |-ItemList          --아이템(카테고리/카테고리의 아이템)을 표현하는 컴포넌트와 타입
          |-itemListComponents
             |-BucketList.tsx
             |-CategoryItemList.tsx
             |-CategoryList.tsx
             |-ItemContent.tsx
             |-ItemDetail.tsx
             |-Paging.tsx
          |-itemListScreens
             |-ItemList.tsx
          |- types
             |-types.ts
        |-Main              --매인화면에 쓰인 콤포넌트들(sidbar나 header)
          |-images
             |-headerArrow.svg
          |-types
             |-type.ts
          |-CustomLinkComponent.tsx
          |-Header.tsx
          |-SideBar.tsx

        |-Redux             --redux를 사용하기위한 파일들(thunk, promise)
          |-types
             |-types.ts
          |-actions.ts
          |-actionTypes.ts
          |-combineReducers.ts
          |-defaultReducer.ts

        |-untills           --axios인스턴스를 만든 파일/ 색상 상수들이 입력된 파일
          |-AxiosInstance.ts
          |-Colors.ts
|- server
     |-index.jk             --react를 배포하기위한 express 서버
```

### 파일구조를 나눈 원칙

1. 화면에 구성에따라 지속 노출되어야하는 부분(헤더,nav바)는 main폴더에 두었고 그 외에
   화면에서 지속적으로 바뀌어야하는 콤포넌트들은 그외에 폴더에 두었습니다.
2. 타입은 각각 스크린이 속해있는 폴더에 위치했습니다(한곳에서 모아서 관리하면 프로젝트가 커질시에 찾기 복잡해집니다)
3. 타입 내에서도 state에 사용되는 타입/Component에 사용되는 타입을 구분하였고
   interface는 Component용 type은 State용으로 구분하기 쉽게 사용하였습니다.
4. utills폴더는 프로젝트에 전역적으로 사용되는 기능들을 모아놨습니다.
5. 모든 기준은 코드들이 원활히 관리될 수 있도록 구분하였습니다.

# 프로젝트를 하면서 자랑스러웠던 부분

리엑트를 사용하여 지금까지 App만 만들다보니 웹페이지를 만드는 것에 많이 부족한 부분이 있었습니다.  
하지만 다시한번 예전에 공부했던것들을 찾아보며 만들다보니 자연스럽게 완성이 된 것같습니다.  
이 과정에서 제가 발전했다는 것을 느꼈던 포인트는  
제가 잘 모르는 것에 있어 겁먹거나 힘들어하지않고 자연스럽게 찾아보고 공부하여 적용하였다는 점입니다.  
개발자로써 많은 성장을 했음으 느꼈던 부분이고 앞으로 프로젝트를 함에있어 이런  
마음가짐을 유지하여 프로젝트에 임해야겠다는 생각을 했습니다.

# 프로젝트를 하면서 아쉬웠던/어려웠던부분

#### 가장 아쉬운점은 디자인이 없었다는 점입니다.

사실 프론트엔드 개발자로써 수많은 디자인을 봐왔지만 막상 참고할만한 디자인이 없이 개발한다는 것은 보통 힘든일이 아님을 다시한번 느끼게 되었습니다.

#### 어려웠던부분은 redux를 사용할때 입니다.

사실 회사에선 ContextApi를 사용하다보니 redux의 promise 기능과 Thunk의 기능을 파악하는 데 조금 어려움이 있었습니다.  
하지만 이또한 찾아보고 공부하고 적용하여 극복했습니다.

# 사용한 패키지와 사용이유 그리고 참고한 싸이트

### axios

1. instance사용가능 : baseUrl이나 인터셉트를 사용하여 요청보내기전/요청받기전에 행동을 수행할 수 있다.
2. JSON데이터 자동변환(fetch에선 .json을 사용해야한다)
3. 대부분 브라우저와 호환가능(IE까지!)
4. timeOut설정 가능

참고한싸이트 : https://sso-feeling.tistory.com/508

### react-html-parser

1. react 에선 string형식의 html을 랜더해주지 않는다.(jsx사용하기때문)
2. string형식의 html을 랜더해준다
3. 물론 `dangerouslySetInnerHTML`을 사용하면되지만 cross site scripting 공격에 취약
4. 때문에 자동으로 필터링해주는 라이브러리를 찾아 사용했습니다.

참고한 싸이트 : 직접 검색하여 사용했습니다.

### react-redux&&redux-proise-middleware

1. 전역에서 state를 관리하기위함
2. 하지만 promise객채를 사용하기위해 redux-proise-middleware를 사용하여 리덕스를통해 api의 결과를 받아와서 사용했습니다 (코드가 더 깔끔해졌습니다)

참고한싸이트 : https://redux-advanced.vlpt.us/2/03.html

### uuid

1. localStorage에 있는 장바구니 데이터는 중복된 값을 허용하고있습니다 때문에 동일한 prefix를 가진 데이터들이 있기때문에 장바구니를 호여줄땐 uuid로 생성된 id를 넣어주었습니다.

참고한 싸이트 : 직접 검색하여 사용했습니다.

### emotion

1. 인라인/styledComponent에 사용되는 라이브러리입니다.
2. 인라인 스타일을 적용하는데 있어 좀더 다양한 기능을 재공합니다(mediaQuery같은)

참고한 싸이트 : 직접 검색하여 사용했습니다.

### craco

1. emotion을 사용함에 있어 매번 `@jsx`선언을 해주어야합니다 이것을 피하기 위해선 cra에서 eject하여 webPack으로 환경을 바꾸고 webPack설정을 해주어야합니다.

2. 하지만 craco를 사용하면 eject하지 않은 cra환경에서도 craco.config.js파일 생성하여  
   emotion설정을 넣어줄 수 있습니다.

참고한 싸이트 : https://dohaelee.github.io/posts/2021-06-13-craco-emotion-react/
