import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/task1",
    name: "Crud",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Crud.vue"),
  },
  {
    path: "/task2",
    name: "Heirarchy",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Heirarchy.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
