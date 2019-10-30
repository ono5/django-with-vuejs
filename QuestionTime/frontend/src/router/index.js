import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Question from "../views/Question.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/question/:slug",
    name: "question",
    component: Question,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  // localhost:8000/http:/0.0.0.0:8000/aboutになってしまう
  // base: process.env.BASE_URL,
  routes
});

export default router;
