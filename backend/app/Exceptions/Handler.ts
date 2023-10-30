/*
|--------------------------------------------------------------------------
| Http Exception Handler
|--------------------------------------------------------------------------
|
| AdonisJs will forward all exceptions occurred during an HTTP request to
| the following class. You can learn more about exception handling by
| reading docs.
|
| The exception handler extends a base `HttpExceptionHandler` which is not
| mandatory, however it can do lot of heavy lifting to handle the errors
| properly.
|
*/

import Logger from '@ioc:Adonis/Core/Logger'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

type ValidationError = {
  rule: string
  field: string
  message: string
}

function getValidationErrorCodeAndString(error: ValidationError) {
  try {
    let field = 'Field'
    let msg = 'is invalid.'
    let code = 400

    field = `${error.field.charAt(0).toUpperCase()}${error.field.slice(1)}`

    switch (error.rule) {
      case 'unique':
        code = 409
        msg = 'already in use.'
    }

    return { code, message: `${field} ${msg}` }
  } catch (err) {
    return { code: 400, message: 'Unknown error occurred during validation.' }
  }
}

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor() {
    super(Logger)
  }

  public async handle(error: any, ctx: HttpContextContract) {
    /**
     * Self handle the validation exception
     */

    switch (error.code) {
      case 'E_INVALID_AUTH_PASSWORD':
        return ctx.response.status(401).send({ error: 'Invalid email and/or password.' })
      case 'E_INVALID_AUTH_UID':
        return ctx.response.status(401).send({ error: 'Invalid email and/or password.' })
      case 'E_VALIDATION_FAILURE':
        const firstError = error.messages?.errors[0]
        const validationErrorString = getValidationErrorCodeAndString(firstError)
        return ctx.response
          .status(validationErrorString.code)
          .send({ error: validationErrorString.message })
    }

    /**
     * Forward rest of the exceptions to the parent class
     */
    return super.handle(error, ctx)
  }
}
