import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'task_frequencies'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.integer('task_id').references('id').inTable('tasks').notNullable()

      table.timestamp('start_date', { useTz: true }).notNullable()

      table.timestamp('end_date', { useTz: true }).notNullable()

      table.timestamp('next_run_date', { useTz: true }).notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
