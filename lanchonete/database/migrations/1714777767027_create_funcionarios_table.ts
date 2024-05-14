import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'funcionarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 45).notNullable
      table.string('cpf', 14).notNullable
      table.string('endereço', 200).notNullable
      table.string('sexo', 1).notNullable
      table.string('telefone', 15).notNullable
      table.integer('cargo_id').unsigned().references('id').inTable('cargo')



      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}