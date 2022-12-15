# web28-Boostform

### Welcome to the web28-Boostform wiki!
부스트캠퍼들을 위한 설문조사 서비스

![logo](https://user-images.githubusercontent.com/20670685/207753069-eb27836c-22cd-4e24-a896-69c12e4d830d.png)


## 👨‍👧‍👦 멤버 소개

|<img width="180" height="180" src="https://user-images.githubusercontent.com/20670685/207751331-3e1762cd-ebc2-4056-87aa-7e6ab959d666.png" />|<img width="180" height="180" src="https://user-images.githubusercontent.com/20670685/207751329-50816106-0bf1-4776-9932-c7baa42fcec0.png" />|<img width="180" height="180" src="https://user-images.githubusercontent.com/20670685/207751328-4d3f152b-3b63-4240-b791-9ce9ac92579f.jpg" />|<img width="180" height="180" src="https://user-images.githubusercontent.com/20670685/207751305-757353d0-31e5-4861-b958-51c9e179f777.jpg" />|
|:---:|:---:|:---:|:---:|
| [김강년](https://github.com/KangNyeonKim) | [박도희](https://github.com/dohpark) | [윤성호](https://github.com/beepbipbp) | [임현택](https://github.com/gotoERROR00111011) |
| J019 | J072 | J129 | J170 |
| Week5 | Week3 | Week4 | Week2 |

## 📑 프로젝트 소개
```
📑 부스트캠퍼들을 위한 설문조사 서비스
```
```
😡 서버의 한계에 도전하는 스트레스 테스트
```
```
🛠 서버를 살리기 위한 성능향상 기능구현
```

## 🔎 기능 소개

### 회원가입 및 로그인
- 깃허브 OAuth을 통해 로그인을 할 수 있습니다
![01_로그인](https://user-images.githubusercontent.com/20670685/207753378-5bcf00a3-0d25-4003-8d8e-c3405b0e18bd.gif)

### 설문지 관리
- 자신이 만든 설문지의 기본적인 정보를 확인할 수 있습니다.
- 설문지를 삭제할 수 있습니다.
![02_설문지관리](https://user-images.githubusercontent.com/20670685/207753393-31f68232-6117-4e0c-be32-8a6e7e655227.gif)

### 설문지 만들기
- 회원들이 직접 설문지를 만들고 수정할 수 있습니다.
- 설문지를 만들고 게시판이나 링크를 통해 공유할 수 있습니다.
![03_설문지만들기](https://user-images.githubusercontent.com/20670685/207753440-ac5cf7c1-357b-404b-b808-9f108b41a4e2.gif)

### 설문지 응답하기
- 설문지 응답을 제출할 수 있습니다.
- 설문지 응답 후 설문지를 수정할 수 있습니다.
- 설문지 수정시 기존 응답한 답안이 채워집니다.
![04_설문지응답하기](https://user-images.githubusercontent.com/20670685/207753472-78ce1f35-45e1-46ef-8d16-09bb6af24236.gif)

### 설문지 결과보기
- 차트로 시각화된 설문지 결과를 확인할 수 있습니다.
- 객곽식(단수) 응답은 파이 그래프로 시각화 합니다.
- 객관식(복수) 응답은  막대 그래프로 시각화 합니다.
- 서술형 응답은 리스트로 나열합니다.
![05_설문지결과](https://user-images.githubusercontent.com/20670685/207753492-26eecdb0-a32b-476b-b127-5d9e14c7604f.gif)

### 설문지 게시판
- 게시판에 공유된 설문지를 통해 설문지 응답을 할 수 있습니다.
- 게시판에 공유된 설문지의 결과를 확인할 수 있습니다.
![06_설문지게시판](https://user-images.githubusercontent.com/20670685/207753511-8bc9df98-6047-4133-a02a-2abc41c7fbd1.gif)

## 📚 기술 스택
![기술스택](https://user-images.githubusercontent.com/20670685/207753549-71690d73-f9ce-4f42-b4ab-8aa8ddc932e6.png)

## 🧩 아키텍처
![아키텍처](https://user-images.githubusercontent.com/20670685/207753562-6c5a95a9-a0a7-482d-a134-7029fb3f3888.png)

## 💯 스트레스 테스트
![테스트_01](https://user-images.githubusercontent.com/20670685/207753584-7022164c-b217-44f7-89d1-d6bdfc510135.gif)

### Scale out 전 : p99 - 1000ms
- 10초간 초당 1000개의 동시 요청(설문지 조회)
![테스트_02](https://user-images.githubusercontent.com/20670685/207753581-e6a934cb-07bc-4e6a-b12d-c4cede965761.png)

### Scale out 후 : p99 - 160ms
- 10초간 초당 1000개의 동시 요청(설문지 조회)
![테스트_03](https://user-images.githubusercontent.com/20670685/207753579-4046cb0d-6494-4376-ae24-610cc51d46a0.png)

## 기술적 도전
- [지역성을 고려한 게시판 API Caching](https://www.notion.so/boostcamp-wm/API-Caching-2c1ed9612842411aa0b943fb2a388c2b)
- [안전한 JWT 운용 방식](https://www.notion.so/boostcamp-wm/JWT-9057870476494bb98abc13dbe91fa6c4)
- [설문조사 페이지 UI 개선](https://www.notion.so/boostcamp-wm/UI-a027a88016774afcad7a831121ac973f)
- [설문지 호출 및 응답지 제출 API에서의 응답 시간 개선](https://www.notion.so/boostcamp-wm/API-897a1c33b9744362804e50c6075960fd)
