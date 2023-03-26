function createRouteMap(routes) {
  const pathMap = {};

  routes.forEach((route) => {
    addRouteRecord(route, pathMap);
  });
  //递归遍历路由表，变成一个键值对的形式
  function addRouteRecord(route, pathMap, parent) {
    const path = parent
      ? `${parent.path === "/" ? "" : parent.path}/${route.path}`
      : route.path;
    let record = {
      path,
      component: route.component,
      parent,
      name: route.name,
    };
    pathMap[path] = record;
    if (route.children) {
      route.children.forEach((childRoute) => {
        addRouteRecord(childRoute, pathMap, record);
      });
    }
  }
  return {
    pathMap,
  };
}
export default createRouteMap;
