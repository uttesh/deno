import {Router} from './modules.ts'
import { User } from './user.ts';

let users: Array<User> = [
{
  name: "Uttesh",
  company: "RivetSys"
},
{
  name: "Yallanki",
  company: "RivetSys"
},
{
  name: "Muni",
  company: "RivetSys"
}
]

export class UserController {
  rounter: Router;

  constructor(rounter:Router){
    this.rounter = rounter;
    this.configRoute()
  }

  configRoute(){
   this.rounter
   .get('/user',this.getAll)
   .get('/user/:name',this.get)
   .post('/user/',this.create)
   .put('/user/:name',this.update)
   .delete('/user/:name',this.delete);
  }

  

  getAll = ({ response }: { response: any }) => { 
    response.body = users
  }

  get = ({ params, response }: { params: { name: string }; response: any }) => {
    const user: User | undefined = this.findUserByName(params.name)
    if (user) {
      response.status = 200
      response.body = user
    } else {
      response.status = 404
      response.body = { message: `User not found.` }
    }   
  }

  private findUserByName = (name: string): ( User | undefined ) => users.filter(user => user.name === name )[0]

  create = async ({ request, response }: { request: any; response: any }) => {
    const body = await request.body()
    const user: User = body.value  
    users.push(user)
    response.body = { message: 'OK' }
    response.status = 200
  }

  update = async ({ params, request, response }: { params: { name: string }; request: any; response: any }) => {
    let user: User | undefined = this.findUserByName(params.name)
    if (user) {
      const body = await request.body()
      const updateInfos: { company?: string; } = body.value
      user = { ...user, ...updateInfos}
      users = [...users.filter(user => user.name !== params.name), user]
      response.status = 200
      response.body = { message: 'OK' }
    } else {
      response.status = 404
      response.body = { message: `User not found` }
    }  
  }

  delete = ({ params, response }: { params: { name: string }; response: any }) => {
    users = users.filter(user => user.name !== params.name)
    response.body = { message: 'OK' }
    response.status = 200
  }
}