export let Vue;
function install(_Vue) {
  Vue = _Vue; //备份 Vue 构造函数
  //混入： 把创建 Vue 实例时传入的 router 对象注入到 Vue 实例上
  Vue.mixin({
    beforeCreate() {
      // 希望所有的组件都可以拿到 router 实例，注：不能直接把 router 实例挂载到 Vue.prototype 上，因为这样会导致所有的组件共享一个 router 实例，而我们希望每个组件都有自己的 router 实例，可能有多个根组件
      //写法一： this 指向  Vue 实例：
      // if (this.$options.router) {
      //   this._router = this.$options.router;
      // } else {
      //   this._router = this.$parent && this.$parent._router;
      // }
      //写法二：把Vue根实例挂载到vm 的_routerRoot上
      if (this.$options.router) {
        this._routerRoot = this; //Vue根实例
        this._router = this.$options.router; //把路由实例挂载到 Vue 实例上
        this._router.init(this);
      } else {
        //处理后代组件
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
    props: {
      to: {
        type: String,
        required: true,
      },
      tag: {
        type: String,
        default: "a",
      },
    },
    methods: {
      handler() {
        this.$router.push(this.to);
      },
    },
    render() {
      let tag = this.tag;
      return <tag onClick={this.handler}>{this.$slots.default}</tag>;
    },
  });
  Vue.component("router-view", {
    render() {
      return <div>router-view</div>;
    },
  });
}

export default install;
