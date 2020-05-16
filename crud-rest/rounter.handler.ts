
import {Application,Router} from 'https://deno.land/x/oak/mod.ts'

export class RouteHandler {

  private app: Application;
  private router: Router;

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