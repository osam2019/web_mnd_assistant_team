

# 국방 어시스턴트
[![Netlify Status](https://api.netlify.com/api/v1/badges/be6cda7a-597c-46a7-9963-48ccd75bde65/deploy-status)](https://app.netlify.com/sites/mnd-assistant/deploys) ![gpllicense](https://img.shields.io/badge/license-GPLv3-green.svg) [![logo](https://img.shields.io/badge/logo-Mnd-blue.svg)](http://www.mnd.go.kr/mbshome/mbs/mnd/subview.jsp?id=mnd_060202000000)

![mndassistant](https://raw.githubusercontent.com/osam2019/web_mnd_assistant_team/master/public/mnd_logo.png)

## 데모 (Demo)
- [데모](https://mnd-assistant.netlify.com/)
- [발표 영상](https://youtu.be/Yh3d5xtsPMc)
- [발표 자료 다운로드](https://github.com/osam2019/web_mnd_assistant_team/raw/master/%EA%B5%AD%EB%B0%A9%20%EC%96%B4%EC%8B%9C%EC%8A%A4%ED%84%B4%ED%8A%B8(%ED%8C%80%EB%AA%85%20%EB%AF%B8%EC%81%98%EB%AF%B8)%20%EC%9D%B4%EC%A0%95%ED%95%84%2C%20%EC%9D%B4%EC%9D%80%EC%83%81.pptx)
- [개발 문서](https://github.com/osam2019/web_mnd_assistant_team/blob/master/%EA%B5%AD%EB%B0%A9%20%EC%96%B4%EC%8B%9C%EC%8A%A4%ED%84%B4%ED%8A%B8(%ED%8C%80%EB%AA%85%20%EB%AF%B8%EC%81%98%EB%AF%B8)%20%EC%9D%B4%EC%A0%95%ED%95%84%2C%EC%9D%B4%EC%9D%80%EC%83%81-Dev%20doc(%EA%B0%95%EC%82%AC%ED%99%95%EC%9D%B8%EC%9A%A9).pdf)

국군 인트라넷 주요 행정 체계들을 하나의 SPA(Single Page Application)로 통합하여 구축하고 Ai기술을 활용한 `ChatBot` 기능을 통해 사용자가 대화식 행정처리를 할 수 있도록 개발하였습니다.
포함된 주요 행정 체계는 다음과 같습니다.

- 대시보드
![enter image description here](https://raw.githubusercontent.com/osam2019/web_mnd_assistant_team/master/public/readme/dashboard.png)
- 메일 체계
![enter image description here](https://raw.githubusercontent.com/osam2019/web_mnd_assistant_team/master/public/readme/email.png)
- 주소록 체계
![enter image description here](https://raw.githubusercontent.com/osam2019/web_mnd_assistant_team/master/public/readme/contacts.png)
- 일정관리 체계
![enter image description here](https://raw.githubusercontent.com/osam2019/web_mnd_assistant_team/master/public/readme/calendar.PNG)
- 예약 체계
![enter image description here](https://raw.githubusercontent.com/osam2019/web_mnd_assistant_team/master/public/readme/reservation.png)
- 챗봇 학습 체계
![enter image description here](https://raw.githubusercontent.com/osam2019/web_mnd_assistant_team/master/public/readme/teachai.png)

상기 체계 기능들은 아래와 같은 `ChatBot` 시스템에 의해 관리됩니다.
상기 기능 이외에 사전 Dataset을 통한 일반적인 질문 답변이 가능합니다.

![enter image description here](https://raw.githubusercontent.com/osam2019/web_mnd_assistant_team/master/public/readme/chat1.png)

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
$ yarn serve
```

# 사용법 (Getting Started)

 1. Chatbot
    - 사용자 인증 과정이 수행되면 Chatbot 시스템에도 자동으로 로그인이 됩니다. DialogFlow API를 통해 작동하므로 학습된 사전 Dataset에 의해 한국어 자연어 처리가 가능합니다.
 2. 메일 체계
	 - 받은 메일에 대한 정보(보낸이, 제목, 날짜), 메일쓰기 기능
 3. 주소록 체계
	 - 사용자 정보(계급, 성명, 소속, 이메일), 수정 기능
 4. 일정 관리 체계
	 - 일정 조회(월간, 주간, 일간), 일정 등록(제목, 날짜, 종류, 내용), 캘린더 기능
 5. 예약 체계
	 - 전산 장비 접수(지역별), 직접신청(부서명, 사용자, 연락처, 상위부서) 기능
 6. 챗봇 학습 체계
	 - Chatbot 데이터 학습 기능 제공. 사용자 질문에 따른 답변을 일괄 입력하여 머신러닝 수행, 입력정보(질문, 답변, 핵심 데이터 형식, 유사데이터 학습여부)

## 챗봇 사용 가능한 명령어
- '메일 열어줘', '주소록 체계 열어' 등
- '이은상에게 메일 보내줘'
- '이정필 사람 찾아줘', '이은상 사람찾기'
- '일정에 추가해줘', '일정추가', '일정에 더해줘', 등
- '계정 잠겼으면 어디다 전화해야돼?'
- '정보보호반 번호 알려줘'

# 팀 정보 (Team Information)

팀명 미쁘미
공군사관학교
* 병장 이정필 (j2ongp@gmail.com)
* 상병 이은상 (leetdavidu@gmail.com)


# License
이 프로젝트는 (즉, `src` 디렉토리 안의 모든 코드) [GNU 일반 공중 사용 허가서 v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html) 에 따라 라이센스가 부여됩니다.

This project (i.e. all code inside of the `src` directory) is licensed under the
[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).
