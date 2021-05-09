<template>
    <div>
        <div class="question-editor">
            <div class="pop-up-editor">
                <div class="header-editor">

                </div>
                <div class="body-editor">
                    <div class="input-question">
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div class="possible-answers">
                    <div 
                        class="answer"
                        v-for="item in $store.state.answers"
                        :key="item.id"
                    >
                        <input type="text">
                        <div 
                            class="close"
                            @click="deleteAnswer"
                        >
                            +
                        </div>
                    </div>
                </div>   
                <div class="footer-editor">
                    <button
                        v-show="$store.state.stateBtnAddAnswer" 
                        class="add-answear"
                        @click="$store.commit('checkAnswer')"
                    >
                        Добавить вариант ответа
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        deleteAnswer(e){
            let currentElement = e.currentTarget
            let answers = this.$store.state.answers
            let findItem = answers.findIndex(item => item.id == currentElement)
            
            if(answers.length == 2){
                return false
            }
            answers.splice(findItem)
        }
    }
}
</script>

<style lang="sass" scoped>

div.question-editor
    display: flex
    justify-content: center
    align-items: flex-start
    background-color: #373737
    height: 100%
    position: fixed
    z-index: 45
    width: 100%
    top: 0
    left: 0

    div.pop-up-editor
        padding: 35px
        border-radius: 8px 
        width: 500px
        background-color: #FFFFFF
        margin: 20px

div.input-question textarea
    display: block
    width: 100%
    box-sizing: border-box
    height: 40px
    font-size: 16px
    padding: 0 16px
    color: #292A3A
    border-radius: 8px
    background-color: #fff
    border: 1px solid rgba(0,0,0,0.2)
    outline: none
    font-family: 'Quicksand', sans-serif

div.possible-answers
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
        
div.answer
    display: flex

div.close
    margin-left: 10px
    cursor: pointer
    font-size: 20px
    transform: rotate(45deg)

</style>