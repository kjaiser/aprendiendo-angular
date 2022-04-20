import { Component } from '@angular/core';
import { configuracion } from 'models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'aprendiendo-angular';
  public descripcion = 'aca aprenderemos angular';
  public mostrar_componente : boolean = true;

  constructor(){
    this.title =configuracion.titulo;
    this.descripcion = configuracion.descripcion;
  }  


  ocultarComponente(valor : boolean){
    this.mostrar_componente = valor;
  }
}
