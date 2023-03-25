import createRouteMap from "./create-route-map";
function createMatcher(routes) {
  routes = routes || [];
  createRouteMap(routes);
  console.log("[ routes ]-2", routes);
  function addRoutes(routes) {
    console.log("[ routes ]-3", routes);
  }
  function addRoute(route) {
    console.log("[ route ]-4", route);
  }
  function match(path) {
    console.log("[ path ]-5", path);
  }
  return {
    addRoutes, //添加多个路由
    addRoute, //添加路由
    match, //根据路径匹配路由组件
  };
}
export default createMatcher;
