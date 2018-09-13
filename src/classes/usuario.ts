export class Usuario {
	constructor(
		public first_name: string,
		public email: string,
		public password: string,
		public username: string,
		is_active: boolean
	){}
}