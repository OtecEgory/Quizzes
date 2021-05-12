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
                <div class="select-all">
                    <input type="checkbox">
                    <span>Разрешить множественный выбор</span>
                </div>
                <div class="possible-answers">
                    <span 
                        class="option-error"
                        v-show="showErrorItem"
                        v-for="error in errors"
                        :key="error"
                    >
                        {{error}}
                    </span>
                    <div 
                        class="answer"
                        v-for="(item, index) in $store.state.answers"
                        :key="item.id"
                    >
                        <span>Вариант ответа {{++index}}</span>
                        <input 
                            type="text"
                            v-model="item.value"
                        >
                        <div
                            v-show="$store.state.stateBtnClose"
                            class="close"
                            @click="deleteAnswer(item.id)"
                        >
                        <img src="../../../assets/free-icon-delete-801983 1(1).svg" alt="">
                        </div>
                    </div>
                </div>
                <button
                    v-show="$store.state.stateBtnAddAnswer" 
                    class="add-answear"
                    @click="$store.commit('checkAnswer')"
                >
                    Добавить вариант ответа
                </button>
                <div class="footer-editor">
                        <div class="select">
                            <div 
                                class="header-select"
                                v-on:click="showBodySelect = !showBodySelect"
                            >
                                {{selectedTime.count}} {{selectedTime.timeUnits}}
                            </div>
                            <transition name="fade">
                                <div class="list-time" v-if="showBodySelect">
                                    <div 
                                        class="options"
                                        v-for="item in times"
                                        :key="item.id"
                                        @click="selectTimeQuestion(item)"
                                    >
                                        {{item.count}} {{item.timeUnits}}
                                    </div>
                                </div>
                            </transition>
                        </div>
                        <div class="wrap-button">
                        <button 
                            class="cancle"
                            @click="cancleCreateQuestion"
                        >
                        cancle
                        </button>
                        <button
                            class="next"
                            @click="checkAnswers"
                        >
                        next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {time} from '../../../mock/index'
import { v4 as uuidv4 } from 'uuid';

export default {
    data:function(){
        return{
            times:[],
            showBodySelect: false,
            showErrorItem: true,
            errors: [],
            inp1: "",
            inp2: "",
            error: {
                name: 'Option 1 and 2 must be filled',
            },
            selectedTime: {
                id: uuidv4(),
                timeUnits: 'секунд',
                count: 30
            }
        }
    },
    mounted(){
        this.times = time.map(item => {
            return item
        })
    },
    methods:{
        deleteAnswer(itemid){
            let answers = this.$store.state.answers
            let findItem = answers.findIndex(item => item.id === itemid)

            switch (answers.length) {
                case 3:
                    this.$store.state.stateBtnClose = false
                    break;
                case 5:
                    this.$store.state.stateBtnAddAnswer = true
                    break;
                case 2:
                    return false
            }
            answers.splice(findItem, 1)
        },
        selectTimeQuestion(defaultTime){
            this.times.find(item => item.id)
            this.selectedTime = defaultTime
            this.showBodySelect = false
        },
        cancleCreateQuestion(){
            if(this.$route.fullPath === '/create-quiz'){
                this.$router.push('/')
            }
        },
        checkAnswers() {
            let items = this.$store.state.answers.filter(item => item.value)

            if(items.length < 2){
                this.errors.push(this.error.name)
                setTimeout(()=>{
                    this.showErrorItem = false
                    this.errors.splice(this.error.name)
                },2000)
                this.showErrorItem = true
            }else{
                this.$store.state.questions.push({
                    id: uuidv4(),
                    answers: this.$store.state.answers
                })
                this.$router.push('/editor')
            }
        }
    },
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
    flex-direction: column
        
div.answer
    display: flex
    justify-content: center
    align-items: center
    font-family: 'Quicksand', sans-serif
    font-size: 14px
    input
        display: block
        width: 100%
        margin: 10px
        box-sizing: border-box
        height: 40px
        font-size: 16px
        padding: 0 35px 0 20px
        color: #292A3A
        border-radius: 8px
        background-color: #fff
        border: 1px solid rgba(0,0,0,0.2)
        outline: none
        font-family: 'Quicksand', sans-serif

div.close
    margin-left: 10px
    cursor: pointer
    position: relative
    right: 10%
    bottom: 7%
    width: 10px
    height: 10px

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

div.select
    margin-right: 20px

div.header-select
    display: flex
    justify-content: space-between
    align-items: center
    width: 125px
    padding: 8px 16px
    border: solid 1px #e4e4e4
    font-family: 'Quicksand', sans-serif
    font-size: 14px
    font-weight: 500
    font-style: normal
    background-color: #FFFFFF
    color: #666666
    cursor: pointer
    position: relative

div.list-time
    font-family: 'DIN Next LT Pro'
    font-size: 14px
    font-weight: 500
    font-style: normal
    border: solid 1px #e4e4e4
    position: absolute
    z-index: 20
    background-color: #FFFFFF

.fade-enter-active, .fade-leave-active
    transition: opacity 0.3s

.fade-enter, .fade-leave-to
    opacity: 0

div.options
    display: flex
    justify-content: flex-start
    align-items: center
    margin: 0
    font-family: 'Quicksand', sans-serif
    font-size: 14px
    cursor: pointer
    width: 123px
    padding: 8px 16px
    text-align: left
    &:hover
        background-color: #E4E4E4

span.option-error
    display: flex
    flex-direction: column
    flex-wrap: wrap
    padding-top: 10px
    font-family: 'Quicksand', sans-serif
    font-size: 14px
    color: #EC0B43

div.footer-editor
    display: flex
    justify-content: space-between
    margin: 20px 0px


button.add-answear
    margin: 20px 0px

div.select-all
    font-family: 'Quicksand', sans-serif
    font-size: 14px
    margin: 15px 0px


</style>