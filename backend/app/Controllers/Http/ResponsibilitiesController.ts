import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Responsibility from 'App/Models/Responsibility'

import CreateResponsibilityValidator from 'App/Validators/CreateResponsibilityValidator'

export default class ResponsibilitiesController {
  public async get({ response, auth }: HttpContextContract) {
    await auth.use('web').check()
    if (!auth.isLoggedIn || !auth.user) return response.status(401)

    const res = await Responsibility.query().where('ownerId', auth.user.id)
    return response.status(200).send(res)
  }

  public async create(ctx: HttpContextContract) {
    const { request, response, auth } = ctx
    await auth.use('web').check()
    if (!auth.isLoggedIn || !auth.user) return response.status(401)

    const { name, description, emoji } = await request.validate({
      schema: new CreateResponsibilityValidator(ctx).schema,
    })

    const newResponsibility = new Responsibility()
    newResponsibility.ownerId = auth.user.id
    newResponsibility.name = name
    newResponsibility.description = description
    newResponsibility.emoji = emoji
    const res = await newResponsibility.save()

    return response.status(200).send(res)
  }
}
