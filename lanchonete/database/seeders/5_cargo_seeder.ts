import Cargo from '#models/cargo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
   await Cargo.createMany([
  {nome:"gerente"},
  {nome:"oreia seca"},
  {nome:"pau mandado de muie "},
  {nome:"motoboy"},
  {nome:"herdeiro"}
   ])
  }
}