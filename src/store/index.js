import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid';

Vue.use(Vuex)

export default new Vuex.Store({
    actions:{},

    mutations:{

        checkAnswer(state){

            let addAnswer = () => {
                state.answers.push({
                    id: uuidv4(),
                    name: ''
                })
            }

            let filteredItems = state.answers.filter(item => item.id).length
            if(filteredItems == 5){
                return false
            }
            addAnswer()
        },
    },

    state:{
        statePopUp: false,
        statePageQuizzes: false,
        stateSlider: false,
        stateBtnAddAnswer: true,
        answers:[],
    },

    getters: {},

    modules:{},
})