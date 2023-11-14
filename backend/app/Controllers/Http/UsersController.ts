import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

import CreateUserValidator from 'App/Validators/CreateUserValidator'

export default class UsersController {
  public async login({ auth, request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    const res = await auth.use('web').attempt(email, password)
    return response.status(200).send(res)
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.use('web').logout()
    return response.status(200)
  }

  public async create(ctx: HttpContextContract) {
    const { email, password, nickname } = await ctx.request.validate({
      schema: new CreateUserValidator(ctx).schema,
    })

    const newUser = new User()
    newUser.email = email
    newUser.password = password
    newUser.nickname = nickname
    await newUser.save()
    const res = await ctx.auth.use('web').login(newUser)
    return ctx.response.status(200).send(res)
  }

  public async loggedInUser({ auth, response }: HttpContextContract) {
    await auth.use('web').check()
    if (auth.isLoggedIn && auth.user) {
      response.send(auth.user)
    } else {
      return response.status(401)
    }
  }
}
