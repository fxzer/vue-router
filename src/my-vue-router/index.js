import install from "./install";

class VueRouter {
  constructor(options) {
    console.log("[ options ]-6", options);
  }
}
VueRouter.install = install;
export default VueRouter;
