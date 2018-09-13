import { Cliente} from '../classes/cliente'

export class RespostaLogin {
    constructor(
        public token: string,
        public cliente
    ){}
}