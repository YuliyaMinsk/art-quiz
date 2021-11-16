type CallbackFunction = (arg1: { page: string, path: string }) => void;

type Route = {
  path: string;
  page: string;
  //callback: CallbackFunction;
}

export class Router {
  readonly routes: Route[];

  constructor() {
    this.routes = []; // store all routes and their callback functions
  }

  addNewRoute(path: string, page: string, callback: CallbackFunction) { 
    if(!path || !callback) throw new Error('Path или callback отсутствуют!');

    this.routes.forEach(route => {
      if(route.path === path) throw new Error(`Path ${route.path} уже существует.`);
    });

    const route = { 
      path, 
      page,
      callback
    }
    this.routes.push(route); // add new route to the array of routes
  }

  init() {
    this.routes.some(route => {

        let regEx = new RegExp(`^${route.path}$`); 
        let path = '/' + window.location.hash;
        let page = route.page;

        //console.log(route, route.path, path);
        if(path.match(regEx)) { // if true, return callback
          let req = { page, path } 
          //return route.callback.call(this, req); // why do i need a callback???
        }
    })
  }
}