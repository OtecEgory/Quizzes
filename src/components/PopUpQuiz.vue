<template>
    <div class="shadow-background">
        <div class="pop-up">
            <p>1. Name this quiz</p>
            <input 
                type="text"
                class="quiz-name"
                placeholder="Quiz name"
                autocomplete="off"
                id="value"
                v-model="value"
            >
            <span 
                class="name-error"
                v-for="error in errors"
                :key="error"
            >
                {{error}}
            </span>
            <p>2. Choose relevant subjects</p>
            <hashtag-quizess/>
            <div class="wrap-button">
                <button 
                    class="cancle"
                    @click="closePopup"
                >
                cancle
                </button>
                <button
                    class="next"
                    @click="errosChecking"
                >
                next
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import HashtagQuizess from './HashtagQuizess.vue'
    export default {
        components: { HashtagQuizess },
        props:{
            closePopup: Function
        },
        data:function(){
            return{
                errors: [],
                value: null,
                hashtag: null,
                errorQuiz: {
                    nameError: "Пожалуйста, введите название викторины.",
                }
            }
        },
        methods:{
            errosChecking(){
                if(!this.value && !this.errors.includes(this.errorQuiz.nameError)){
                    this.errors.push(this.errorQuiz.nameError)
                }
                // }else {
                //     this.$router.push('/create-quiz')
                // }
            },
        },
    }
</script>

<style lang="sass" scoped>

div.shadow-background
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

    div.pop-up
        padding: 35px
        border-radius: 8px 
        width: 500px
        background-color: #FFFFFF
        margin: 20px

        input.quiz-name
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
        
        span.name-error
            display: flex
            flex-direction: column
            flex-wrap: wrap
            padding-top: 10px
            font-family: 'Quicksand', sans-serif
            font-size: 14px
            color: #EC0B43

    p
        font-size: 14px
        font-family: 'Quicksand', sans-serif

    div.wrap-button
        display: flex
        justify-content: flex-end
        padding-top: 30px

    button.cancle
        font-size: 14px
        font-family: 'Quicksand', sans-serif
        padding: 8px 16px
        border: none
        margin-right: 20px
        background-color: #fbc02d
        cursor: pointer
        font-size: 16px
        color: #ffffff
        font-weight: 500
        border-radius: 4px
        text-align: center
        transition: all 0.1s ease-in-out
    
    button.next
        font-size: 14px
        font-family: 'Quicksand', sans-serif
        padding: 8px 16px
        border: none
        background: #1fe7bd
        cursor: pointer
        font-size: 16px
        color: #ffffff
        font-weight: 500
        border-radius: 4px
        text-align: center
        transition: all 0.1s ease-in-out

        
</style>