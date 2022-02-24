import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Disco } from 'src/app/entidades/disco';
import { ServicioDiscos } from 'src/app/servicios/servicioDiscos';
import { ServicioSesion } from 'src/app/servicios/servicioSesion';

let discos:Disco[] = []


@Component({
  selector: 'app-listadodiscos',
  templateUrl: './listadodiscos.component.html',
  //providers: [ ServicioDiscos ],
})
export class ListadoDiscosComponent implements OnInit {

  public discos:Disco[] = []

  constructor(private servicioDiscos:ServicioDiscos,
              private servicioSesion:ServicioSesion,
              private router:Router) { 
    console.log("instanciando ListadoDiscosComponent")
    this.discos = this.servicioDiscos.listar()
  }

  ngOnInit(): void {
  }

  public seleccionar(idDisco:number):void{
    this.servicioSesion.setItem("idDisco",idDisco);
    this.router.navigateByUrl("/discos/formulario")
  }

}
