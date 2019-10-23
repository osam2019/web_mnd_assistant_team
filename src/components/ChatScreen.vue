<template>
  <div class="chatscreen" >
    <beautiful-chat 
      style="z-index: 10;"
      :participants="participants"
      :on-message-was-sent="onMessageWasSent"
      :message-list="messageList"
      :new-messages-count="newMessagesCount"
      :is-open="isChatOpen"
      :always-scroll-to-bottom="alwaysScrollToBottom"
      :open="openChat"
      :close="closeChat"
      :message-styling="messageStyling"
      :showTypingIndicator="showTypingIndicator"
      @onType="handleOnType"
      @edit="editMessage" 
      titleImageUrl="/mnd_icon_small.png"
    >
      
    </beautiful-chat>
  </div>
</template>

<script>
export default {
  
  name: 'Chat',
  components: {
    
  },
  data() {
    return {
     
      participants: [
        {
          id: 'user1',
          name: '국방 어시스턴트',
          imageUrl: '/mnd_icon.png'
        }
      ],
      alwaysScrollToBottom: true,
      messageStyling: true,
      showTypingIndicator: ''
    }
  }, computed: {
    messageList() {
      return this.$store.getters['chat/getMessages']
    },
    newMessagesCount() {
      return this.$store.getters['chat/getNotifications']
    },
    isChatOpen() {
      return this.$store.getters['chat/getChatOpen']
    }
  }, 
  
  //Methods
  methods: {
    sendMessage (text) {
      if (text.length > 0) {
        //this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
        
        this.addNotifications(1)

        this.onMessageWasSent({ author: 'user1', type: 'text', data: { text } })


      }
    },
    onMessageWasSent (message) {
      this.addMessage(message)

      //여기가 'ai' 부분
      //쪽팔리네
      if(message.author == 'me'){
        
        let msg = message.data.text;
        let messageToSend = '';

        //메뉴 열기
        if(msg.includes('열어')){
          if(message.data.text.includes('메일')){
            this.$router.push('/dashboard/emails')
            messageToSend = '열었습니다.'
          } else if(message.data.text.includes('주소록')){
            this.$router.push('/dashboard/contacts')
            messageToSend = '열었습니다.'
          } else if(message.data.text.includes('예약')){
            this.$router.push('/dashboard/reservation')
            messageToSend = '열었습니다.'
          }
        }
        //사람 찾기  
        else if(msg.includes('사람 찾아줘') || msg.includes('사람찾기')){
          let crit = msg.replace('사람 찾아줘','').replace('사람찾기','')
         
          this.$store.dispatch('contacts/setCriteria', crit, {root: true})
          
          let filtered = this.$store.getters['contacts/searchContacts']
          
          messageToSend = `총 ${filtered.length}명을 찾았습니다.`

          let thee = this
          setTimeout(function(){
            thee.$store.dispatch('contacts/setSearch', crit, {root: true})
            thee.$router.push('/dashboard/contacts')
          }, 1250)

        }
        //행정 검색 
        else if(msg.includes('번호') || msg.includes('전화')){
          if(msg.includes('정보보호')){
            messageToSend = '정보보호반의 전화번호는 0188입니다.'
          } else if(msg.includes('바이러스')){
            messageToSend = '바이러스가 걸리셨으면 0188, 정보보호반에 전화주시면 됩니다.'
          } else if(msg.includes('계정') && msg.includes('잠겼')){
            messageToSend = '계정이 잠기셨으면 4587, 정보체계운영반에 전화주시면 됩니다.'
          }
        } else if(msg.includes('안녕')){
          let hi = ['안녕하세요!', '안녕하십니까!', '좋은 하루에요.'];
          messageToSend = hi[Math.floor(Math.random() * hi.length)];
        } else {
          let idk = ['잘 모르겠어요.', '죄송해요. 잘 못 알아들었어요.', '죄송합니다. 못 알아들었어요.'];
          messageToSend = idk[Math.floor(Math.random() * idk.length)];
        }
        this.showTypingIndicator = 'user1'

        setTimeout(() => {
          this.addMessage({type: 'text', author: 'user1', data:{ text: messageToSend}})
          this.showTypingIndicator = ''
        }, 1200);
      }

    },
    handleScrollToTop () {
      // called when the user scrolls message list to top
      // leverage pagination for loading another page of messages
  	},
    handleOnType () {
      //console.log('Emit typing event')
    },
    editMessage(message){
      const m = this.messageList.find(m=>m.id === message.id);
      m.isEdited = true;
      m.data.text = message.data.text;
    },

    //State-changing methods
    addNotifications(n){
      this.$store.dispatch('chat/resetNotifications', n, {root: true})
    },
    resetNotifications(){
      this.$store.dispatch('chat/resetNotifications', null, {root: true})
    },
    openChat(){
      this.$store.dispatch('chat/setChatOpen', true, {root: true})
      this.resetNotifications()
    },
    closeChat(){
      this.$store.dispatch('chat/setChatOpen', false, {root: true})
    },
    addMessage(msg) {
      this.$store.dispatch('chat/addMessage', msg, {root: true})
    }
  }
}

//json

</script>

<style>
.sc-chat-window {
  z-index: 10;
}
.received .sc-message--text {
  color: #2c3e50 !important;
}
.sc-user-input--text {
  text-align: left;
}
.sc-chat-window.opened {
  /* border: 1px solid #b1b1b1; */
  box-shadow: 4px 6px 12px 4px rgba(148, 149, 150, 0.5) !important;
  width: 500px !important;
  height: calc(100% - 80px) !important;
}
.sc-message {
  width: 430px !important;
}
</style>