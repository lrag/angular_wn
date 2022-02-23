import { Component, OnInit } from '@angular/core';
import { Disco } from 'src/app/entidades/disco';
import { ServicioDiscos } from 'src/app/servicios/servicioDiscos';

@Component({
  selector: 'app-discos',
  templateUrl: './discos.component.html'
})
export class DiscosComponent implements OnInit {

  public disco:Disco = new Disco()
  public discos:Disco[] = []
  
  private servicioDiscos:ServicioDiscos
  
  public constructor(){
    this.servicioDiscos = new ServicioDiscos() 
    this.listar()
  }
  
  ngOnInit(): void {
  }
  
  public listar():void{
    this.discos = this.servicioDiscos.listar()
  }
  
  public insertar():void{
    console.log("Insertar")
    this.servicioDiscos.insertar(this.disco)  
    this.listar()
    this.vaciar()
  }
  
  public modificar():void{
    console.log("Modificar")
    this.servicioDiscos.modificar(this.disco)    
    this.listar()
    this.vaciar()
  }
  
  public borrar():void{
    console.log("Borrar")
    this.servicioDiscos.borrar(this.disco)    
    this.listar()
    this.vaciar()
  }

  public vaciar():void{
    console.log("Vaciar")
    this.disco = new Disco()  
  }

  public seleccionar(idDisco:number):void{
    console.log("Seleccionar: ",idDisco)
    this.disco = this.servicioDiscos.buscarPorId(idDisco)
  }

}
