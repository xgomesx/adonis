// import type { HttpContext } from '@adonisjs/core/http'

import Funcionario from "#models/funcionario"
import { HttpContext } from "@adonisjs/core/http"

export default class FuncionariosController {
    async index({ request }: HttpContext) {
        const page = request.input('page')
        const perpage = request.input('perpage', 10)
        return await Funcionario.query().paginate(page, perpage)
    }
    async show({ params }: HttpContext) {

        return await Funcionario.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['nome', 'cpf','endereco','sexo', 'telefone','cargo_id'  ])
        return await Funcionario.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const funcionario = await Funcionario.findOrFail(params.id)
        const dados = request.only(['nome', 'cpf','endereco','sexo', 'telefone','cargo_id'])

        funcionario.merge(dados)
        return await funcionario.save()

    }

    async destroy({ params }: HttpContext) {
        const funcionario = await Funcionario.findOrFail(params.id)


        await funcionario.delete()

        return { msg: 'Registro deletado com sucesso!', Funcionario }


    }

}