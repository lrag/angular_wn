

export class Disco {

    public constructor(
        public _id   :number|any = null,
        public titulo:string|any = null,
        public grupo :string|any = null,
        public year  :number|any = null,
        public genero:string|any = null,
        public notas :string|any = null
    ){
    }

    public vacio():boolean {
        return (this.titulo==null || this.titulo.trim().length==0) &&
               (this.grupo==null  || this.grupo.trim().length==0)  &&
               (this.year==null   || this.year==0)                 &&
               (this.genero==null || this.genero.trim().length==0) &&
               (this.notas==null  || this.notas.trim().length==0)   
    } 

}

