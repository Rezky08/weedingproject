import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Customer from "../views/Customer.vue";
import Partner from "../views/Partner.vue";

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
  },
  {
    path: "/partner",
    name: "partner",
    component: Partner,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
