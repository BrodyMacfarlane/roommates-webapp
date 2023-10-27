import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

import CreateUserValidator from 'App/Validators/CreateUserValidator'

export default class UsersController {
  async login({ auth, request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    await auth.use('web').attempt(email, password)
    return response.status(200)
  }

  async create(ctx: HttpContextContract) {
    const email = ctx.request.input('email')
    const password = ctx.request.input('password')

    await ctx.request.validate({ schema: new CreateUserValidator(ctx).schema })

    const newUser = new User()
    newUser.email = email
    newUser.password = password
    await newUser.save()
    await ctx.auth.use('web').login(newUser)
    return ctx.response.status(200)
  }

  async loggedInUser({ auth, response }: HttpContextContract) {
    await auth.use('web').check()
    if (auth.isLoggedIn) {
      response.send(auth.user)
    }
    else {
      return response.status(401)
    }
  }
}
