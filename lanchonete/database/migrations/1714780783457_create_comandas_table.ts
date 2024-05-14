import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'comandas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('mesa',45).nullable()
      table.string('data_pagamento').nullable()
      table.string('data').nullable()
      table.integer('funcionario_id').unsigned().references('id').inTable('funcionario')
      table.integer('cliente_id').unsigned().references('id').inTable('cliente')
      table.integer('forma_pagamento_id').unsigned().references('id').inTable('forma_pagamento')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}