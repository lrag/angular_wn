export class Usuario {

    public constructor(
        public _id      :string|any = null,
        public nombre   :string|any = null,
        public login    :string|any = null,
        public password :string|any = null,
        public idioma   :string|any = null,
        public direccion:string|any = null,
        public correoE  :string|any = null,
        public telefono :string|any = null,
        public rol      :string|any = null
    ){}

}
