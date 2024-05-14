import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ProdutoIngrediente extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare produto_id:number

  @column()
  declare ingrediente_id: number
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}