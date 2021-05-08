import VueRouter from 'vue-router'
import ViewCreateQuizzes from '../views/CreateQuizzes';

export default new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/create-quiz',
            component: ViewCreateQuizzes
        },
    ]
})