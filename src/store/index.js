import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid';

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        statePopUp: false,
        statePageQuizzes: false,
        stateSlider: false,
        stateBtnAddAnswer: true,
        stateBtnClose: false,
        questions: [],
        answers:[
            {
                id: uuidv4(),
                value: '',
            },
            {
                id: uuidv4(),
                value: '',
            }
        ],
    },

    mutations:{

        checkAnswer(state){

            let filteredItems = state.answers.filter(item => item.id).length
            let addAnswer = () => {
                state.answers.push({
                    id: uuidv4(),
                    value: '',
                })
            }

            switch (filteredItems) {
                case 4:
                    state.stateBtnAddAnswer = false
                    break;
                case 2:
                    state.stateBtnClose = true
                    break;
                case 5:
                    return false
            }
            addAnswer()
        },
        
    },

    actions:{},

    getters: {},

    modules:{},
})