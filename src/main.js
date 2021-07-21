import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import "./assets/scss/index.scss";
import i18n from "./i18n";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import { capitalizeEachFirstLetter, capitalizeFirstLetter } from "./functions";

const app = createApp(App);
app.use(ElementPlus);
app.use(i18n);
app.use(router);
app.mixin({
  methods: {
    capitalizeEachFirstLetter,
    capitalizeFirstLetter,
    hasSlot(slotName) {
      return !!this.$slots[slotName];
    },
  },
});
app.mount("#app");
