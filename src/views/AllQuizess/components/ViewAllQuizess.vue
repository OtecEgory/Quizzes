<template>
    <div>
        <sidebar/>
        <pop-up-quiz/>
    </div>
</template>

<script>
import PopUpQuiz from '../../../components/PopUpQuiz.vue'
import Sidebar from '../../../components/Sidebar.vue'
    export default {
        components: { Sidebar, PopUpQuiz },
    }
</script>

<style lang="sass" scoped>

</style>