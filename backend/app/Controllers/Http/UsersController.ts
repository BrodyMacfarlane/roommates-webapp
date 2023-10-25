import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async create({ request, response }: HttpContextContract) {
    console.log(request)
    response.send({ msg: 'Hi' })
  }
}
