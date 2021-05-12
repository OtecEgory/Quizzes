import VueRouter from 'vue-router'
import ViewCreateQuizzes from '../views/CreateQuizzes';
import ViewAllQuizess from '../views/AllQuizess/components/ViewAllQuizess'; 
import ViewEditor from '../views/EditorQuizzes/components/ViewEditor'

export default new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/',
            component: ViewAllQuizess
        },
        {
            path: '/create-quiz',
            component: ViewCreateQuizzes
        },
        {
            path: '/editor',
            component: ViewEditor
        },
    ]
})