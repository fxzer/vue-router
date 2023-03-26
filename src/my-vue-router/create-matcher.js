import createRouteMap from "./create-route-map";
function createMatcher(routes) {
  routes = routes || [];
  let { pathMap } = createRouteMap(routes);
  function addRoutes(routes) {}
  function addRoute(route) {}
  function match(path) {
    return pathMap[path];
  }
  return {
    addRoutes, //添加多个路由
    addRoute, //添加路由
    match, //根据路径匹配路由组件
  };
}
export default createMatcher;
