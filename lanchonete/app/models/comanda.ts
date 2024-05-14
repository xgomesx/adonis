import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Comanda extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare mesa: string
  
  @column()
  declare data_pagamento: number
  
  @column()
  declare data: number
  
  @column()
  declare funcionario_id: number
  
  @column()
  declare cliente_id: number
  
  @column()
  declare forma_pagamento: number
  

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}