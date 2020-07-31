import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'auth',
    component: Auth
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
