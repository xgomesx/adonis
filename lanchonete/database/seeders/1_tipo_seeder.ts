
import Tipo from '#models/tipo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
   await Tipo.createMany([ 
    {nome:'Bebidas'},
    {nome:'Hamburguer'},
    {nome:'Cachorro-quente'},
    {nome:'Porções'},
    {nome:'Combos'},
    
    
    
    ])
  
  }
}