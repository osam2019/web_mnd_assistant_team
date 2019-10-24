
# 국방 어시스턴트
<img src='public/login.PNG'>
국군 인트라넷 주요 행정 체계들을 하나의 SPA(Single Page Application)로 통합하여 구축하고 Ai기술을 활용한 Chatbot 기능을 통해 사용자가 대화식 행정처리를 할 수 있도록 개발하였습니다.
포함된 주요 행정 체계는 다음과 같습니다.<br><br>
<img src='public/all.png'>
<ul>
<li>메일 체계</li>
<li>주소록 체계</li>
<li>일정관리 체계</li>
<li>예약 체계</li>
<li>챗봇 학습 체계</li>
</ul>
상기 기능들은 아래와 같은 Chatbot 시스템에 의해 관리됩니다.
상기 기능 이외에 사전 Dataset을 통한 일반적인 질문 답변이 가능합니다.
<div style='text-align: center'><img src='public/chatbot.PNG'></div>

# 컴퓨터 구성 / 필수 조건 안내 (Prerequisites)
Google Chrome 사용

# 설치 안내 (Installation Process)
yarn

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

미쁘미 팀
공군사관학교 병장 이정필, 상병 이은상


