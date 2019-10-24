
# 국방 어시스턴트
[![Netlify Status](https://api.netlify.com/api/v1/badges/be6cda7a-597c-46a7-9963-48ccd75bde65/deploy-status)](https://app.netlify.com/sites/mnd-assistant/deploys)

<img src='https://img.shields.io/badge/license-GPLv3-green.svg'> <a href="http://www.mnd.go.kr/mbshome/mbs/mnd/subview.jsp?id=mnd_060202000000" target="_blank"><img src='https://img.shields.io/badge/logo-Mnd-blue.svg'></a>



<img src='public/mnd_logo.png'>

[데모](https://mnd-assistant.netlify.com/)


국군 인트라넷 주요 행정 체계들을 하나의 SPA(Single Page Application)로 통합하여 구축하고 Ai기술을 활용한 `ChatBot` 기능을 통해 사용자가 대화식 행정처리를 할 수 있도록 개발하였습니다.
포함된 주요 행정 체계는 다음과 같습니다.<br><br>
<img src='public/all.png'>
<ul>
<li>메일 체계</li>
<li>주소록 체계</li>
<li>일정관리 체계</li>
<li>예약 체계</li>
<li>챗봇 학습 체계</li>
</ul>
상기 체계 기능들은 아래와 같은 `ChatBot` 시스템에 의해 관리됩니다.<br>
상기 기능 이외에 사전 Dataset을 통한 일반적인 질문 답변이 가능합니다.
<div style='text-align: center'><img src='public/chatbot.png'></div>

# 기술 스택
<img src='public/stack.png'><br>

# 컴퓨터 구성 / 필수 조건 안내 (Prerequisites)
ECMAScript 6 지원 브라우저 사용

권장: Google Chrome 버젼

사용한 Google Chrome 버젼: `77.0.3865.120(공식 빌드) (64비트)`

# 설치 안내 (Installation Process)
```bash
$ yarn install
```

#### 서버 시작
```bash
$ yarn run serve
```

# 사용법 (Getting Started)
<ol>
  <li>Chatbot</li>
사용자 인증 과정이 수행되면 Chatbot 시스템에도 자동으로 로그인이 됩니다. DialogFlow API를 통해 작동하므로 학습된 사전 Dataset에 의해 한국어 자연어 처리가 가능합니다.
  <li>메일 체계</li>
  받은 메일에 대한 정보(보낸이, 제목, 날짜), 메일쓰기 기능
  <li>주소록 체계</li>
  사용자 정보(계급, 성명, 소속, 이메일), 수정 기능
  <li>일정 관리 체계</li>
  일정 조회(월간, 주간, 일간), 일정 등록(제목, 날짜, 종류, 내용), 캘린더 기능
  <li>예약 체계</li>
  전산 장비 접수(지역별), 직접신청(부서명, 사용자, 연락처, 상위부서) 기능
  <li>챗봇 학습 체계</li>
  Chatbot 데이터 학습 기능 제공. 사용자 질문에 따른 답변을 일괄 입력하여 머신러닝 수행, 입력정보(질문, 답변, 핵심 데이터 형식, 유사데이터 학습여부)
</ol>

# 팀 정보 (Team Information)

팀명 미쁘미<br><br>
공군사관학교
* 병장 이정필(j2ongp@gmail.com)
* 상병 이은상(leetdavid@outlook.com)


# License
이 프로젝트는 (즉, `src` 디렉토리 안의 모든 코드) [GNU 일반 공중 사용 허가서 v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html) 에 따라 라이센스가 부여됩니다.

This project (i.e. all code inside of the `src` directory) is licensed under the
[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).
