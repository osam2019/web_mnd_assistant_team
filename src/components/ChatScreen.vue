<template>
  <div>
    <beautiful-chat 
      :participants="participants"
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="newMessagesCount"
      :isOpen="isChatOpen"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :open="openChat"
      :close="closeChat"
      :messageStyling="messageStyling"
      @onType="handleOnType"
      @edit="editMessage" 
    >
      <template v-slot:header> 
        <!-- 🤔 Good chat between {{participants.map(m=>m.name).join(' & ')}}  -->
        <h3>국방 어시스턴트</h3>
      </template>
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
      isChatOpen: true,
      messageList: [
          { type: 'text', author: `user1`, data: { text: `안녕하세요, 국방 어시스턴트입니다.
          무엇을 도와드릴까요?` } },
          //{ type: 'text', author: `me`, data: { text: `Say yes!` } }
      ],
      newMessagesCount: 1,
      alwaysScrollToBottom: true,
      messageStyling: true
    }
  }, methods: {
    sendMessage (text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1

        this.onMessageWasSent({ author: 'user1', type: 'text', data: { text } })


      }
    },
    onMessageWasSent (message) {
      // called when the user sends a message
      this.messageList = [ ...this.messageList, message ]

      console.log(message)

      if(message.author== 'me' && message.data.text.includes('열어')){
        if(message.data.text.includes('메일')){

          this.$router.push('/dashboard/emails')
        } else if(message.data.text.includes('주소록')){
          
          
          function sleep(ms){
            return new Promise(resolve => setTimeout(resolve, ms));
          }


          async function sendDelayed(thees, m){
            await sleep(1000)

            thees.$router.push('/dashboard/contacts')
            m = [...m, {type: 'text', author: 'user1', data: { text: '열었습니다.'}} ]
          }

          sendDelayed(this, this.messageList)
          
        }
      }
    },
    openChat(){
      this.isChatOpen = true
      this.newMessagesCount = 0
    },
    closeChat(){
      this.isChatOpen = false
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
    }
  }
}
</script>

<style>
.received .sc-message--text {
  color: #2c3e50 !important;
}
</style>