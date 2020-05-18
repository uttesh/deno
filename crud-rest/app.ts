import {Application} from './modules.ts'
import {RouteHandler} from './rounte.handler.ts'
import {UserController} from './user.controller.ts'

const app = new Application()
const routeHandler = new RouteHandler(app)
routeHandler.init()
const userController = new UserController(routeHandler.getRouter())
userController.configRoute()
await app.listen(`localhost:4000`)