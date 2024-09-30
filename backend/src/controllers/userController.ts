import { Request, Response} from "express";
import { User } from "../model/user";
import bcrypt from "bcrypt"

class UserController {
    public async userCreate(req: Request, res: Response){
        const{ name, email, senha} = req.body;

        if( !email && !senha){
            return res.status(401).json({message: "Forneça o e-mail e a senha"});
        }

        try{
            const usuarioExistente = await User.findOne({ email });
            if (usuarioExistente) {
                return res.status(400).json({message: 'E-mail já em uso'});
            }

            const senhaHash = await bcrypt.hash(senha,10);

            const novoUsuario = new User({
                name,
                email,
                senha: senhaHash,
                listas: [],
            });

            await novoUsuario.save()

            return res.status(201).json({ message: 'Usuário criado com sucesso!', usuario: novoUsuario})
        }catch (error){
            console.error(error);
            res.status(500).json({message: 'Erro ao criar o usuário.'});
        }
    }
}

export default  new UserController;