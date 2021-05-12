<template>
    <div class="editor">
        <div class="container">
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
                    <div class="title-bar">
                            <span class="titel-question"> Question {{++index}}</span>
                            <button class="">add</button>
                            <button class="edit">edit</button>
                    </div>
                    <div class="btn-bar">
                        <button class="edit">edit</button>
                        <button class="clone"> dublicated</button>
                        <button class="deleted">deleted</button>
                    </div>
                </div>
                <div class="body">

                </div>
                <div class="footer">

                </div>
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

div.question
    display: flex
    justify-content: center
    align-items: center
    margin-top: 100px
    border: 1px solid #f0f0f0
    box-shadow: 0 0 2px #00000008, 0 2px 2px #00000014

div.header
    display: flex
    justify-content: space-between
    padding: 20px 0px
    background-color: #f0f0f0

div.title-bar
    padding-right: 60px
    button
        margin-right: 5px

div.btn-bar 
    button
        margin-right: 5px

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

</style>