import FormaPagamento from '#models/forma_pagamento'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
   await FormaPagamento.createMany([
     {nome:"Dinheiro" },
     {nome:"Pix"},
     {nome:"Cartao_credito" },
     {nome:"Cartao_debito" }
     
   ])
  }
}