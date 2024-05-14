// import type { HttpContext } from '@adonisjs/core/http'

import ProdutoComanda from "#models/produto_comanda"
import { HttpContext } from "@adonisjs/core/http"

export default class ProdutoComandasController {
       async index({ request }: HttpContext) {
        const page = request.input('page')
        const perpage = request.input('perpage', 10)
        return await ProdutoComanda.query().paginate(page, perpage)
    }
    async show({ params }: HttpContext) {

        return await ProdutoComanda.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['quantidade', 'produto_id','comanda_id' ])
        return await ProdutoComanda.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const produtoComanda = await ProdutoComanda.findOrFail(params.id)
        const dados = request.only(['quantidade', 'produto_id','comanda_id'])

        produtoComanda.merge(dados)
        return await produtoComanda.save()

    }

    async destroy({ params }: HttpContext) {
        const produtoComanda = await ProdutoComanda.findOrFail(params.id)


        await produtoComanda.delete()

        return { msg: 'Registro deletado com sucesso!', ProdutoComanda }


    }



}