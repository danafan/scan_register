import Vue from "vue";
import Router from "vue-router";

const index = (resolve) => require(["@/pages/index"], resolve);

Vue.use(Router);

const router = new Router({
  routes: [
  {
    path: "/index",
    component: index,
    name: "打包系统",
  }
  ]
});

router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  next();
});

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
export default router;
