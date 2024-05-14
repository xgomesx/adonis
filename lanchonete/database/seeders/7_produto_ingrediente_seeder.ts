import ProdutoIngrediente from '#models/produto_ingrediente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
await ProdutoIngrediente.createMany([
  {ingrediente_id: 2, produto_id: 5},
  {ingrediente_id: 2, produto_id: 9},
  {ingrediente_id: 2, produto_id: 10},
])
  }
}