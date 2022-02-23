import { Component } from '@angular/core';
import { Disco } from './entidades/disco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public mensaje:string = "Hola que tal"
  public numero1:number = 10
  public numero2:number = 20

  //Un atributo por cada caja de texto
  //public titulo:string = ''
  //public grupo:string  = ''
  //public year:number   = 0

  //Un objeto declarado 'al vuelo'
  //public disco:any = {
  //  titulo : '',
  //  grupo  : '',
  //  year   : 0
  //}

  //Programando la interfaz disco

  //Programando la clase Disco: 
  public disco:Disco = new Disco()
  public discos:Disco[] = []

  public insertarDisco():void{
    console.log("Insertar:",this.disco)
    this.discos.push(this.disco)
    this.vaciarFormulario()
  }
  
  public vaciarFormulario():void{
    console.log("Vaciar")
    this.disco = new Disco()
  }

}
