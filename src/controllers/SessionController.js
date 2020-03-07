
//metodos: indexedDB, show, update, store, destroy
/* 
index: listagem de sessoes
story: Criar uma sessao
show: listar uma unica sessao
update: quando queremos alterar alguma sessao
destroy: quando queremos deletar uma sessao
*/

import User from '../models/User'
class SessionController {

   async store(req, res) {
        const { email } = req.body

        let user = await User.findOne({email})//encontra se há uma registro com essas informações

        //Cria um registro caso não exista essas informações
        if(!user){
            user = await User.create({ email })
        }

        //let user = await User.create({ email })

        return res.json(user)
    }


}

export default new SessionController()