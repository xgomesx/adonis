import Comanda from '#models/comanda'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
 await Comanda.createMany([
  {mesa:"A1", funcionario_id:1, cliente_id:1, forma_pagamento:2, data_pagamento:20052024, data:13052024}
  
 ])
  }
}