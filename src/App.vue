<template>
  <div>
    <router-view /> 
    <view-all-quizess/>
  </div>
</template>

<script>
import ViewAllQuizess from './views/AllQuizess/components/ViewAllQuizess.vue'
  export default {
  components: { ViewAllQuizess },
    
  }
</script>

<style lang="sass" scoped>

</style>