import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateResponsibilityValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({}, [rules.minLength(1), rules.maxLength(25)]),
    description: schema.string({}, [rules.maxLength(255)]),
    emoji: schema.string({}, [rules.maxLength(7)]),
  })

  public messages: CustomMessages = {}
}
