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
          imageUrl: 'https://avatars3.githubusercontent.com/u/1915989?s=230&v=4'
        }
      ],
      isChatOpen: true,
      messageList: [
          { type: 'text', author: `user1`, data: { text: `No.` } },
          { type: 'text', author: `me`, data: { text: `Say yes!` } }
      ],
      newMessagesCount: 1,
      alwaysScrollToBottom: true,
      messageStyling: true
    }
  }, methods: {
    sendMessage (text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
        this.onMessageWasSent({ author: 'support', type: 'text', data: { text } })
      }
    },
    onMessageWasSent (message) {
      // called when the user sends a message
      this.messageList = [ ...this.messageList, message ]
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
      console.log('Emit typing event')
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

</style>