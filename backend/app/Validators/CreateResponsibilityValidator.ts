import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateResponsibilityValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({}, [rules.minLength(1), rules.maxLength(25)]),
    description: schema.string.nullable({}, [rules.maxLength(255)]),
    emoji: schema.string.nullable({}, [rules.maxLength(7), rules.nullable()]),
    color: schema.string.nullable({}, [
      rules.minLength(6),
      rules.maxLength(6),
      rules.regex(new RegExp('^[a-f0-9]{6}$')),
      rules.nullable(),
    ]),
  })

  public messages: CustomMessages = {}
}
