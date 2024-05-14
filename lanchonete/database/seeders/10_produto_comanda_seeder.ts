import ProdutoComanda from '#models/produto_comanda'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
   await ProdutoComanda.createMany([
    {quantidade:"5",produto_id:"8",comanda_id:"4"}
    
   ])
  }
}