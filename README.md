# 파일구조  
```
root  
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
```
### 파일구조를 나눈 원칙
1. 화면에 구성에따라 지속 노출되어야하는 부분(헤더,nav바)과 화면상에서 바뀌어야하는 부분을 기준으로 나누었습니다.
2. 타입은 각각 스크린이 속해있는 폴더에 위치했습니다(한곳에서 모아서 관리하면 프로젝트가 커질시에 찾기 복잡해집니다)
3. 타입 내에서도 state에 사용되는 타입/Component에 사용되는 타입을 구분하였고
interface는 Component용 type은 State용으로 구분하기 쉽게 사용하였습니다.
4. utills폴더는 프로젝트에 전역적으로 사용되는 기능들을 모아놨습니다.
5. 모든 기준은 코드들이 원활히 관리될 수 있도록 구분하였습니다.
