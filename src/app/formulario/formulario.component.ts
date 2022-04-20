import { Component, OnInit } from '@angular/core';
import { usuario } from 'models/usuario';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public user: usuario;

  constructor() { 
    this.user = new usuario('','', '','');
  }

  ngOnInit(): void {
  }

  onSubmit(form : any){
    console.log("onSubmit ejecutado");
    console.log(this.user);
    form.reset();
  }

}
