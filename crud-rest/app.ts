import {Application, Router} from 'https://deno.land/x/oak/mod.ts'
import {RouteHandler} from './rounter.handler.ts'
import {UserController} from './user.controller.ts'

const app = new Application()
const routeHandler = new RouteHandler(app)
routeHandler.init()
const userController = new UserController(routeHandler.getRouter())
userController.configRoute()
await app.listen(`localhost:4000`)