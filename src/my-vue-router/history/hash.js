import Base from "./base";

//确保初始化默认 hash 值
function ensureSlash() {
  if (window.location.hash) {
    return;
  } else {
    window.location.hash = "/";
  }
}
//获取 hash 值
function getHash() {
  return window.location.hash.slice(1);
}

class HashHistory extends Base {
  constructor(router) {
    super(router);
    this.router = router;

    ensureSlash();
  }
  setupListener(record) {
    window.addEventListener("hashchange", (event) => {
      let current = getHash();
      //处理浏览器前进后退，触发 hashchange 事件
      this.transitionTo(current, (route) => {
        console.log("[ route ]-28", route);
      });
    });
  }
  //获取当前路径
  getCurrentLocation() {
    return getHash();
  }
}
export default HashHistory;
