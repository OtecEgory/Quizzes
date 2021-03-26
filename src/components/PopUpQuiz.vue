<template>
    <div 
        class="shadow-background"
        v-if="statePopUp"
    >
        <div class="pop-up">
            <p>1. Name this quiz</p>
            <input 
                type="text"
                class="quiz-name"
                placeholder="Quiz name"
                id="value"
                v-model="value"
            >
            <span 
                class="name-error"
                v-for="error in errors"
                :key="error.value"
            >
                {{error.value}}
            </span>
            <span 
                class="name-error"
                v-for="error in errors"
                :key="error.hashtag"
            >
                {{error}}
            </span>
            <p>2. Choose relevant subjects</p>
            <hashtag-quizess
                :clickCategory="checkCategory"
            />
            <div class="wrap-button">
                <button-cancle
                    :cancleQuiz="closePopUp"
                />
                <button-next
                    :checkValue="checkForm"
                />
            </div>
        </div>
    </div>
</template>

<script>
import ButtonCancle from './ButtonCancle.vue'
import ButtonNext from './ButtonNext.vue'
import HashtagQuizess from './HashtagQuizess.vue'
    export default {
        components: { HashtagQuizess, ButtonCancle, ButtonNext },
        props:{
            statePopUp:Boolean
        },
        data:function(){
            return{
                errors:[],
                value: null,
                hashtag: null,
            }
        },
        methods:{
            checkForm(){
                if(this.value){
                    return true
                }
                this.errors = [];

                if(!this.value){
                    this.errors.push('Пожалуйста, введите название викторины.')
                }
            },
            checkCategory(){
                if(this.hashtag){
                    return true
                }
                this.errors = [];
                
                if(!this.hashtag){
                    this.errors.push('Пожалуйста, выберите название викторины.')
                }
            },
            closePopUp(state){
                return this.statePopUp = state
            }
        }
    }
</script>

<style lang="sass" scoped>

div.shadow-background
    display: flex
    justify-content: center
    padding-top: 40px
    background-color: #373737
    height: 100%
    position: fixed
    z-index: 45
    width: 100%
    top: 0
    left: 0

    div.pop-up
        display: flex
        justify-content: space-between
        flex-direction: column
        align-items: stretch
        padding: 35px
        border-radius: 8px 
        width: 500px
        height: 60%
        background-color: #FFFFFF
        margin: 40px

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
            font-family: 'Quicksand', sans-serif
            font-size: 12px
            color: #EC0B43
            position: relative
            bottom: 25px

    p
        font-size: 14px
        font-family: 'Quicksand', sans-serif
        margin: 0px
        padding: 0px

    div.wrap-button
        display: flex
        justify-content: flex-end
        
</style>