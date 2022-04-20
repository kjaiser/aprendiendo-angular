import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers : [PeticionesService]
})
export class ExternoComponent implements OnInit {
  public user : any;
  public userId : any;
  public fecha : any;

  constructor(
    private _peticionesService : PeticionesService
  ) 
  { 
    this.userId = 1;
  }

  ngOnInit(): void {
    this.cambiarUser();
    this.fecha = new Date();
  }

  cambiarUser(){
    //this.user = false; para vaciar y obtener el efecto cargando
    this._peticionesService.getUser(this.userId).subscribe(
      result =>{
        this.user =result.data;
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

}
