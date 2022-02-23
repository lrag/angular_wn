import { Disco } from "../entidades/disco"


export class ServicioDiscos {

    private discos:Disco[] = []

    constructor(){
        console.log("Instanciando ServicioDiscos")
    }

    public listar():Disco[]{
        //Deberíamos devolver una copia en profundidad del array
        return this.discos
    }

    public buscarPorId(id:number):Disco|any{        
        let discoEncontrado:Disco|any = null        
        for(let disco of this.discos){
            if(disco.id == id){
                //Devolvemos una copia para que nadia toque nuestros preciosos discos
                discoEncontrado = new Disco(disco.id, disco.titulo, disco.grupo, disco.year, disco.genero, disco.notas)
                break
            }
        }        
        return discoEncontrado
    }

    public insertar(disco:Disco):void{
        //Servicio discos es el que decide que valor tiene el id cuando se inserta el disco
        disco.id = Date.now()
        this.discos.push(disco)
        console.log(this.discos)
    }

    public modificar(disco:Disco):void{

    }

    public borrar(disco:Disco):void{
        for(let a=0; a<this.discos.length; a++){
            if(this.discos[a].id == disco.id){
                this.discos.splice(a,1)
                break
            }
        }
    }    

}