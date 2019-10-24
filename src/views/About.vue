<template>
  <div class="about" style="padding: 64px">
    <h2>국방 어시스턴트</h2>
    <h3>v0.0.1 베타</h3>

    <p>이 프로젝트는 국방부와 과학기술정보통신부가 주최한 공개 소프트웨어 아카데미에서 만들어졌습니다.</p>
    <p>_</p>
    <h3>by</h3>
    <p>병장 이정필</p>
    <p>상병 이은상</p>
    <p>_</p>
    <p>밑에 버튼을 총 {{ count }}번 눌렀습니다.</p>
    <el-button 
      type="primary" 
      @click="increment"
    >
      Click Me
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {

    }
  },
  computed: {
    count () {
      console.log(this.$store.getters['test/getCount']);
      // return this.$store.state.test.count
      return this.$store.getters['test/getCount'];
      // return this.$store.getters
    }
  },
  methods: {
    increment(){
      // console.log(this.$store);
      this.$store.dispatch('test/increment', null, {root: true})

    }
  }
}
</script>

<style>

</style>
