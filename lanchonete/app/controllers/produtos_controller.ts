

import { HttpContext } from "@adonisjs/core/http";
import Produto from "../models/produto.js";

export default class ProdutosController {

    async index({ request }: HttpContext) {
        const page = request.input('page')
        const perpage=request.input('perpage',10)
        return await Produto.query().paginate(page, perpage)
    }
    async show({ params }: HttpContext) {

        return await Produto.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['nome', 'preco', 'tamanho', 'tipoId'])
        return await Produto.create(dados)
    }

    async update({params,request}: HttpContext) {
        const produto = await Produto.findOrFail(params.id)
        const dados = request.only(['nome','preco','tamanho','tipoId'])

        produto.merge(dados)
        return await produto.save()
    
    }

    async destroy({params}: HttpContext) {
        const produto = await Produto.findOrFail(params.id)


     await produto.delete()

    return{msg:'Registro deletado com sucesso!', produto}


    }
}