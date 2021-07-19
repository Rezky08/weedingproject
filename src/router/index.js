import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Customer from "../views/Customer.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/customer",
    name: "customer",
    component: Customer,
    props: {
      defaultLayout: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
