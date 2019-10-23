<template>
  <div class="about">
    <h2>A total of {{ count }} people pressed this button.</h2>
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
