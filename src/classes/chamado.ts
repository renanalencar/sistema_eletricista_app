export class Chamado {
	constructor(
		public nome_cliente: string, 
        public nota: number, 
        public endereco: string,//endereço é stirng ou vai ter algo a ver com o maps?
        public descricao: string
	){}
}