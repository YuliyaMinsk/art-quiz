type CallbackFunction = ( page: string, path: string ) => void;

type Route = {
  path: string;
  page: string;
}

export class Router {
  readonly routes: Route[];

  constructor() {
    this.routes = []; // store all routes and their callback functions
  }

  addNewRoute(path: string, page: string) { 
    if(!path)  {
      throw new Error('Path отсутствует!');
    }

    this.routes.forEach(route => {
      if(route.path === path) {
        throw new Error(`Path ${route.path} уже существует.`);
      }
    });

    const route = { 
      path, 
      page,
    }
    this.routes.push(route); // add new route to the array of routes
  }

  getPage(path: string): Route[] {
    let regEx = new RegExp(`^${path}$`); 
    return this.routes.filter((route) => {return route.path.match(regEx)});
  }

}