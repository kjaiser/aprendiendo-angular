import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { configuracion } from 'models/configuracion';

@Component({
  selector: 'primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.css']
})
export class PrimeroComponent implements OnInit {
  public titulo : string;
  public contenido : string;
  public config;
  public color :string;

  constructor() { 
    this.color = 'green';
    this.titulo = "primer boton";
    this.contenido = "es todo el contenido por ahora";
    this.config = configuracion;
    console.log(this.config);
    console.log("primer componente cargado");
  }

  ngOnInit(): void {
    //console.log("onInit ejecutado");
  }

  ngDoCheck(){
    //console.log("doCheck ejecutado");
  }

  ngOnDestroy(){
    //console.log("onDestroy ejecutado");
  }

  cambiarTitulo(){
    this.titulo = "nuevo";
  }
  
}
