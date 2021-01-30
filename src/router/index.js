import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "register"
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue")
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    props: true,
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

import store from "@/store.js";

router.beforeEach((to, from, next) => {
  let authUser = store.getters.user || null;
  // Check if user is logged in
  if (to.name === "Dashboard" && !authUser) {
    next({ name: "Register" });
  } else if ((to.name === "Register" || to.name === "login") && authUser !== null) {
    next({ name: "Dashboard" });
  } else next();
});

export default router;
