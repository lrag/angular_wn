import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioDiscos } from 'src/app/servicios/servicioDiscos';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html'
})
export class CabeceraComponent implements OnInit {

  constructor(private ruta:ActivatedRoute) {

    console.log("HOLA")
    

    ruta.url.subscribe(
      evento => console.log("A VER:",evento)
    )

  }

  ngOnInit(): void {
  }

}
