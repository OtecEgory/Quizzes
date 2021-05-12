<template>
    <div class="editor">
        <div class="top-header">
            <div class="transiton-quizzes-editor">
                <div 
                    class="arrow-home"
                    @click="cancleCreateQuestion"
                >
                <img src="../../../assets/next 1.svg" alt="">
                </div>
                <span>Quizzes Editor</span>
            </div>
        </div>
        <div class="question"
            v-for="(item, index) in $store.state.questions"
            :key="item.id"
        >
            <div class="header">
                <div class="Question">
                    Question {{++index}}
                </div>
                <button class="">add</button>
                <button class="edit">edit</button>
                <button class="clone"> dublicated</button>
                <button class="deleted">deleted</button>
            </div>
            <div class="body">

            </div>
            <div class="footer">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        cancleCreateQuestion(){
            this.$router.push('/')
        },
    }
}
</script>

<style lang="sass" scoped>

div.top-header
    display: flex
    justify-content: space-between
    background-color: #7c43bd

div.transiton-quizzes-editor
    display: flex
    justify-content: center
    align-items: center
    padding: 10px

    span
        color: #fff
        font-family: 'Quicksand', sans-serif
        font-size: 18px
        font-weight: 600

    img
        cursor: pointer
        margin-right: 20px

div.question
    display: flex
    justify-content: center
    align-items: center

</style>