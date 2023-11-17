import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    email: schema.string({}, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
    password: schema.string({}, [rules.minLength(7), rules.confirmed()]),
    nickname: schema.string.nullable({}, [
      rules.minLength(0),
      rules.maxLength(15),
      rules.alphaNum({ allow: ['space', 'underscore', 'dash'] }),
    ]),
  })

  public messages: CustomMessages = {}
}
