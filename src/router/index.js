import Vue from 'vue'
import Router from 'vue-router'
/* Import your views here */

Vue.use(Router)

/**
 * The Vue Router is used to "direct" the browser to render a specific view component
 * inside of App.vue depending on the URL.
 */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    /* Setup routing for your views here */
  ]
});

export default router;
