export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

export function onRouteChange({ location, routes, action }) {
  //console.log(location.pathname, routes, action);
}
