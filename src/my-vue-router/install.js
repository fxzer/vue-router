export let Vue;
function install(_Vue) {
  Vue = _Vue; //备份 Vue 构造函数
  //混入： 把创建 Vue 实例时传入的 router 对象注入到 Vue 实例上
  Vue.mixin({
    beforeCreate() {
      // 这里的 this 指向的是 Vue 实例
      //写法一：
      // if (this.$options.router) {
      //   this._router = this.$options.router;
      // } else {
      //   this._router = this.$parent && this.$parent._router;
      // }
      //写法二：把Vue根实例挂载到vm 的_routerRoot上
      if (this.$options.router) {
        this._routerRoot = this; //Vue根实例
        this._router = this.$options.router;
      } else {
        this._routerRoot = this.$parent && this.$parent._routerRoot;
      }
    },
  });
  //代理 $router
  Object.defineProperty(Vue.prototype, "$router", {
    get() {
      return this._routerRoot._router;
    },
  });
  //注册两个全局组件 router-link 和 router-view
  Vue.component("router-link", {
    render() {
      return <a>{this.$slots.default}</a>;
    },
  });
}

export default install;
