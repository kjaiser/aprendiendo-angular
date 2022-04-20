import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public nombre : String;
  public edad : number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.edad = 0 ; 
    this.nombre =" ";
   }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params)=>{
      console.log(params);
      this.edad = +params['edad'];
      this.nombre = params['nombre'];
      console.log(this.nombre , this.edad);
    })
  }

  redirigir(){
    //rediecciona a otra pagina
    this._router.navigate(["/primero"]);
  }

}
