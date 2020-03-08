
//metodos: indexedDB, show, update, store, destroy
/* 
index: listagem de sessoes
story: Criar uma sessao
show: listar uma unica sessao
update: quando queremos alterar alguma sessao
destroy: quando queremos deletar uma sessao
*/

import User from '../models/User'
import * as Yup from 'yup'
import { Schema, SchemaType } from 'mongoose'

class SessionController {

    async store(req, res) {
        const schema = Yup.object().shape({
            email: Yup.string().email().required()
        })
        const { email } = req.body

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Falha na validação.' })
        }

        let user = await User.findOne({ email })//encontra se há uma registro com essas informações

        //Cria um registro caso não exista essas informações
        if (!user) {
            user = await User.create({ email })
        }

        //let user = await User.create({ email })

        return res.json(user)
    }


}

export default new SessionController()