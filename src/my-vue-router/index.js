import install from "./install";
import createMatcher from "./create-matcher";
class VueRouter {
  constructor(options) {
    //创建路由匹配器
    createMatcher(options.routes);
  }
}
VueRouter.install = install;
export default VueRouter;
