
import {Application,Router} from './modules.ts'

export class RouteHandler {

  app: Application;
  router: Router;

  constructor(app:Application){
    this.app = app;
    this.router = new Router()
  }

  init(){
    this.app.use(this.router.routes())
    this.app.use(this.router.allowedMethods())
  }

   getRouter(){
     return this.router;
   }
}