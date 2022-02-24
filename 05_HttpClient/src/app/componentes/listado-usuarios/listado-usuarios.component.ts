import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { ServicioUsuarios } from 'src/app/servicios/servicio-usuarios';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html'
})
export class ListadoUsuariosComponent implements OnInit {

  public usuarios:any[] = []

  //Jamás de los jamases utilizaremos el objeto HttpClient desde un componente
  //Debe hacerse desde un servicio
  constructor(/*private httpClient:HttpClient,*/
              private servicioUsuarios:ServicioUsuarios) {
  }

  ngOnInit(): void {
  }

  public listarUsuarios():void{

    //Con funciones flecha:
    /*
    let observable:Observable<any> = this.httpClient.get("https://reqres.in/api/users")
    observable.subscribe(
      //Esta función es...anónima, anidada, closure 
      //En typescript si usamos una función flecha no ponemos los tipos de los parámetros
      respuesta => {
        console.log("Respuesta:",respuesta.data)
        //Aqui, dentro de la función flecha, 'this' sigue siendo 'ListadoUsuariosComponent'
        this.usuarios = respuesta.data
      },
      err => console.log(err)
    )
    */
   
    //Llamando al servicio
    this.servicioUsuarios.listarUsuarios()
      .subscribe({
        next  : respuesta => this.usuarios=respuesta.data,
        error :error => console.log(error)
      })

  }

}


