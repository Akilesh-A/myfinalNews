import { createApp } from 'vue'
import App from './App.vue';
import {createRouter,createWebHistory} from  "vue-router";
import HomePage from './components/Pages/HomePage.vue'
import AboutUs from './components/Pages/AboutUs.vue';
import SportsCompo  from './components/Pages/SportsCompo.vue';
import BuisnessCompo from './components/Pages/BuisnessCompo.vue'



const routes=[
    {
        path:'/',
        component:HomePage,
       
    },
    {
        path:'/aboutus',
        component:AboutUs,
    },
    {
        path:'/sportscompo',
        component:SportsCompo,
        props: {
            name: "I'm Akilesh message from parent component to child component (props)           MAIN.JS"
        }
    },
    {
        path:'/buisnesscompo',
        component:BuisnessCompo,
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes:routes,
})

const app=createApp(App);
app.use(router);
app.mount('#app')
