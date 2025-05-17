<div align="center">
  <h1>Mong Mong Village : 멍멍빌리지</h1>
</div>

![mongmong](https://github.com/elice-final-team6/MongMongVillage-FE/assets/33516975/42de15ba-cd42-441d-9bd7-632f2b9570da)

에견인들을 위한 커뮤니티와 서울의 애견카페 리뷰 및 정보공유 사이트<br/>

## 개발기간 
2023.11 ~ 2023.01

//## 배포주소
//현재 배포중지

## 테스트 계정
```
- 일반유저
ID : elice1@test.com
PW : 11111111

- 관리자 ( 모든 게시글,리뷰,댓글 삭제 가능)
ID : admin@mongmong.com
PW : adminpw1234
```

## 개발환경
- 프론트엔드 
![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=white) <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript"/> <img src="https://img.shields.io/badge/-styled_components-DB7093?style=flat-square&logo=styled-components&logoColor=white" alt="Styled-Components"/> <img src="https://img.shields.io/badge/-React_Query-FF4154?style=flat-square&logo=react-query&logoColor=white" alt="React Query"/>
- 백엔드
<img src="https://img.shields.io/badge/-Express.js-000000?style=flat-square&logo=express&logoColor=white" alt="Express.js"/> <img src="https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB"/> <img src="https://img.shields.io/badge/-Nginx-009639?style=flat-square&logo=nginx&logoColor=white" alt="Nginx"/> <img src="https://img.shields.io/badge/-PM2-2B037A?style=flat-square&logo=pm2&logoColor=white" alt="PM2"/> <img src="https://img.shields.io/badge/-Amazon_S3-569A31?style=flat-square&logo=amazon-s3&logoColor=white" alt="Amazon S3"/>
- 협업 
![GitHib](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=GitHub&logoColor=white) ![Notion](https://img.shields.io/badge/-Notion-black?style=flat-square&logo=Notion&logoColor=white) ![Pigma](https://img.shields.io/badge/-Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white)


## 팀원구성 및 역할
| 이름   | 구분              | 주요 역할     |
|--------|------------------|----------|
| [최정윤](https://github.com/cjy00n) | 팀장             | 전체 프로젝트 관리, 프론트엔드 |
| [김영욱](https://github.com/yeonguk0201) | 팀원    | 프론트엔드  |
| [이윤경](https://github.com/ktoo23) | 팀원           | 백엔드  |
| [이지형](https://github.com/j-h-711) | 팀원  |  프론트엔드        |
| [임가림](https://github.com/galimii) | 팀원  |  백엔드        |

## 내가 맡은 페이지 
- **메인 페이지**
  1. 배너 이미지 자동 슬라이드: slick api를 사용해서 여러장의 배너를 슬라이더로 표시했습니다.
  2. 애견 카페 검색 이동: 검색한 값을 쿼리값으로 받아 애견 카페맵 페이지로 보내서 검색합니다. 
  3. 인기 애견카페 추천: 데이터를 받아와 인기가 많은 상위 4개 애견카페를 표시합니다. 불러오기 전 까지 로딩 이미지가 있고, 데이터를 불러오지 못했다면 에러 이미지를 표시합니다. 
  4. 인기글 추천: 데이터를 받아와 인기가 많은 애견카페를 표시합니다. 불러오기 전 까지 로딩 이미지가 있고, 데이터를 불러오지 못했다면 에러 이미지를 표시합니다.
  5. 페이지 이동 시 자연스러운 효과를 위해 scrollTo와 smooth를 사용해 스크롤을 최상단으로 이동합니다.

<br>
     
- **카페맵 페이지**
  1. 카카오 API: 카카오맵 api를 사용해 검색 기능과 맵 기능을 사용했습니다. 정확한 검색어가 아니여도 찾을 수 있도록 도로명 주소와 카페명을 모두 필터링했습니다. 검색 결과에서 클릭하면 해당 카페 상세 페이지로 넘어갈 수 있습니다.
     
<br>
    
- **카페 상세 페이지**: 카페 데이터를 받아서 주소, 메뉴, 영업시간 등 다양한 정보를 표시합니다. 언제 업데이트 했는 지 알 수 있게 마지막 업데이트 날짜도 표시했습니다. 해당 카페에 쓰여진 모든 리뷰를 볼 수 있고 평균 별점 또한 볼 수 있습니다. 리뷰를 클릭하면 해당 리뷰 페이지로 갈 수 있습니다. 버튼을 눌러서 바로 리뷰도 쓸 수 있습니다.
  
<br>
    
- **헤더 / 푸터**: 네비게이터 기능과 함께 헤더엔 어떤 페이지에 있는 지 확실하게 알 수 있게 해당 페이지에 해당하는 네비게이터 버튼에 색을 널었습니다. 헤더 푸터 모두 scrollTo를 사용해 자연스럽게 화면 맨 위로 이동하며 푸터엔 sns링크도 연결했습니다. 토큰을 받아서 로그인 여부를 확인합니다. 로그인 유무에 따라 버튼이 달라집니다. 만약 토큰이 유효하지 않다면 경고를 띄웁니다.
  
<br>
    
- **top100 페이지**: 인기가 많은 카페 순으로 카페 100개를 정렬했습니다. 카페 이름, 별점, 번호, 영업 시간 같은 간단한 정보를 확인할 수 있고 해당 카페 상세 페이지로 넘어갈 수 있습니다.
   
<br>
    

## 트러블 슈팅
1. **링크 인식하기**: 헤더에서 해당 링크에 해당하는 버튼을 강조하고 싶어서 location.pathname을 사용해서 했는데 바뀌지 않았다. 생각해 보니까 렌더링 시에 정해지는 거여서 링크를 useEffect를 사용 path가 같으면 active 클래스를 부여해서 해결했다.
     
<br>
    
2. **카카오맵 API**: 카카오맵 API를 사용하는데 검색 기능이 에러가 있었다. 처음엔 카카오 DB와 프로젝트 DB에 있는 카페정보와 일치하는 것들을 필터링 해서 보내는 방식이였다. 그렇게 한 이유는 카카오 DB는 크고 사용자도 많아서 정확성도 더 높아서 프로젝트 DB와 비교하면서 하면 더 정확한 정보를 얻을 수 있다고 생각해서 그렇게 했었는데 적지 않은 양의 DB가 만들어진 상태에서 비교를 하다보니 완전히 일치하지 않는 내용이 좀 많아서 검색이 제대로 되지 않았었다. 그래서 카카오 DB는 사용하지 않고 프로젝트 DB에 있는 정보만을 사용해서 좌표를 찍는 등 프로젝트 DB만을 사용해서 해결했다. 아쉬운 점은 사용자들은 보통 검색을 카카오나 네이버같은 곳에서 많이 할텐데 이 정보와 일치하지 않은 점이 있다면 상대적으로 대기업의 서비스를 더 신뢰할 수 있기 때문에 이러한 점에서 다음엔 카카오 API를 더욱 활용해 보고 싶다.
 

## 화면 구성 
- 반응형 웹을 적용하여 태블릿 및 모바일 환경에서는 다르게 보일 수 있음

| 메인 페이지                           | **커뮤니티** 목록 / 상세 페이지                         | **카페** 지도/리스트/상세 페이지                         |
|---------------------------------------|------------------------------------------|------------------------------------------|
|![main](https://github.com/elice-final-team6/.github/assets/33516975/5f487377-36c1-4e74-8102-d5309017b069)| ![community](https://github.com/elice-final-team6/.github/assets/33516975/0aaadb95-6e83-4f67-9897-2cfa073a4ae3)| ![cafe](https://github.com/elice-final-team6/.github/assets/33516975/2ee0ad84-6c8f-498e-a1e6-e3b02a63946b)|

|**리뷰** 목록/상세 페이지                           | 로그인 / 회원가입 페이지                         | 마이페이지 / 내활동 페이지                         |
|---------------------------------------|------------------------------------------|------------------------------------------|
|![review](https://github.com/elice-final-team6/.github/assets/33516975/8c553cd9-1e2a-4050-9bc8-d66a59b0e413)| ![auth](https://github.com/elice-final-team6/.github/assets/33516975/da6148da-27c9-41af-847a-834e987b576b)| ![my](https://github.com/elice-final-team6/.github/assets/33516975/3fb83397-810e-4cfd-825e-71b164e14a5b)|

## 시연 영상 
[![Youtube Badge](https://img.shields.io/badge/Youtube-ff0000?style=flat-square&logo=youtube&link=https://www.youtube.com/c/kyleschool)](https://youtu.be/3BLg_u27zXw)

