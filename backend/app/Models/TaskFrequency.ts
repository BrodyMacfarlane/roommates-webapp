import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TaskFrequency extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public taskId: number

  @column.dateTime()
  public startDate: DateTime

  @column.dateTime()
  public endDate: DateTime

  @column.dateTime()
  public nextRunDate: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
