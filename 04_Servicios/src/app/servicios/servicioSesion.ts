import { Injectable } from "@angular/core";

@Injectable( { providedIn : 'root' } )
export class ServicioSesion {

    private sesion:any[]

    public constructor(){
        this.sesion = []
    }

    public setItem(clave:any, valor:any):void{
        this.sesion[clave] = valor
    }
 
    public getItem(clave:any):any{
        return this.sesion[clave]
    }

}