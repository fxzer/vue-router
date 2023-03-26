import install from "./install";
import createMatcher from "./create-matcher";
import HashHistory from "./history/hash";
import BrowserHistory from "./history/history";
class VueRouter {
  constructor(options) {
    //创建路由匹配器
    this.macther = createMatcher(options.routes);
    let mode = options.mode || "hash";
    if (mode === "hash") {
      this.history = new HashHistory(this);
    } else {
      this.history = new BrowserHistory(this);
    }
  }
  //匹配
  match(location) {
    return this.macther.match(location);
  }
  //跳转路径 push
  push(location) {
    // window.location.hash = location; 注：需要兼容 pushState的 history 模式
    this.history.transitionTo(location, () => {
      window.location.hash = location;
    });
  }
  init(app) {
    //初始化
    const history = this.history;
    let currentLocation = history.getCurrentLocation();
    history.transitionTo(currentLocation, (route) => {
      history.setupListener();
    });
  }
}
VueRouter.install = install;
export default VueRouter;
