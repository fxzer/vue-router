class Base {
  constructor(router) {
    this.router = router;
  }
  // 路由跳转逻辑
  transitionTo(location, listener) {
    // 1. 获取匹配到的路由
    const record = this.router.match(location);
    // 2. 调用回调函数
    listener && listener(record);
  }
}

export default Base;
