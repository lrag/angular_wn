import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Disco } from 'src/app/entidades/disco';
import { ServicioDiscos } from 'src/app/servicios/servicioDiscos';
import { ServicioSesion } from 'src/app/servicios/servicioSesion';

@Component({
  selector: 'app-formulariodiscos',
  templateUrl: './formulariodiscos.component.html',
  //providers: [ ServicioDiscos ],
})
export class FormularioDiscosComponent implements OnInit {

  public disco:Disco = new Disco()
  
  constructor(private servicioDiscos:ServicioDiscos,
              private servicioSesion:ServicioSesion,
              ruta:ActivatedRoute,
              private router:Router) { 
    console.log("instanciando FormularioDiscosComponent")

    //Miramos si en la barra del navegador nos han dejado el id de un disco
    let idDiscoSel:number = ruta.snapshot.params['idDisco']  
    if(idDiscoSel){
      let resultado:Disco|any = this.servicioDiscos.buscarPorId(idDiscoSel)
      if(resultado){
        this.disco = resultado
      }
    }

    //Miramos si en el 'servicioSesion' nos han dejado el id de un disco
    idDiscoSel = servicioSesion.getItem("idDisco")  
    if(idDiscoSel){
      let resultado:Disco|any = this.servicioDiscos.buscarPorId(idDiscoSel)
      if(resultado){
        this.disco = resultado
      }
    }    

  }

  ngOnInit(): void {
  }
  
  public insertar():void{
    console.log("Insertando...")
    this.servicioDiscos.insertar(this.disco)
    //navegar
    this.router.navigateByUrl("/discos/listado")
  }

  public modificar():void{
    console.log("Modificando...")

    this.vaciar()
  }

  public borrar():void{
    console.log("Borrando...")

    this.servicioDiscos.borrar(this.disco)

    this.vaciar()
  }

  public vaciar():void{
    console.log("Vaciando...")     
    this.disco = new Disco()
  }

}
