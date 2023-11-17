import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Responsibility extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public ownerId: number

  @column()
  public name: string

  @column()
  public emoji: string | null

  @column()
  public description: string | null

  @column()
  public color: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
