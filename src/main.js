import { createApp } from 'vue'
import App from './App.vue'
import './style.scss';
import vuetify from './plugins/vuetify'
import {createRouter, createWebHistory} from 'vue-router'
import {routes} from './router/routes'

const router = createRouter({
  history: createWebHistory(),
  routes, 
  linkActiveClass: 'menu-item-active'
})

createApp(App)
  .use(vuetify, router)
  .use(router)
  .mount('#app')
  
