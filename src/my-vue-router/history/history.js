import Base from "./base";
class BrowserHistory extends Base {
  constructor(router) {
    super(router);
    this.router = router;
  }
  setupListener() {
    window.addEventListener("popstate", (about) => {});
  }
  //获取当前路径
  getCurrentLocation() {
    return window.location.pathname;
  }
}
export default BrowserHistory;
