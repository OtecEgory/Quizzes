<template>
    <div>
        <div class="sidebar">
            <div class="container-sidebar">
                <button
                    class="create-quiz"
                    @click="createNewQuize(true)"
                >
                    create
                </button>
                <transition name="component-fade" mode="out-in">
                    <pop-up-quiz
                        v-if="stateShowPopUp"
                        :statePopUp="stateShowPopUp"
                    />
                </transition>
                <ul>
                    <li
                        v-for="item in menulist"
                        :key="item.listItem"
                    >
                        {{item.listItem}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import PopUpQuiz from './PopUpQuiz.vue'
    export default {
        components: { PopUpQuiz },
        data:function(){
            return{
                stateShowPopUp: false,
                menulist:[
                    {
                        listItem: 'Color Theme',
                    },
                    {
                        listItem: 'Collections',
                    },
                    {
                        listItem: 'My Libraly',
                    }
                ]
            }
        },
        methods:{
            createNewQuize(statePopUp){
                return this.$data.stateShowPopUp = statePopUp
            }
        }
    }
</script>

<style lang="sass">

div.sidebar
    height: 100%
    min-width: 200px
    position: fixed
    top: 0
    background-color: #FFFFFF
    left: 0
    box-shadow: 0 0 10px rgba(0,0,0,0.3)

div.container-sidebar
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    padding-top: 40px
    ul
        margin: 0
        padding: 0
    li
        font-size: 14px
        font-family: 'Quicksand', sans-serif
        list-style: none
        padding: 20px
        text-align: center
        cursor: pointer

    button.create-quiz
        cursor: pointer
        font-family: 'Quicksand', sans-serif
        border: 0
        display: flex
        justify-content: center
        align-items: center
        box-sizing: border-box
        width: 168px
        padding: 8px
        background-color: #1fe7bd
        border-radius: 8px
        box-shadow: 0px 2px 0px #6c4298
        transform: translateY(0px)
        transition: all 0.14s ease-in-out
        color: #fff
        font-weight: 600
        font-size: 16px

.component-fade-enter-active, .component-fade-leave-active
  transition: opacity .5s ease

.component-fade-enter, .component-fade-leave-to
    opacity: 0
         
</style>