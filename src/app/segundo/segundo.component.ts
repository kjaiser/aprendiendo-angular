import { Component, OnInit } from '@angular/core';
import { cpu } from 'models/compCPU';
import { cpuService } from '../services/cpu.service';


@Component({
  selector: 'segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css'],
  providers:[cpuService]
})
export class SegundoComponent implements OnInit {

  public cpus : Array<cpu>;
  public marcas : String[];// o Array[string];
  public mi_texto : string;

  constructor(
    private _cpuService : cpuService
  ) 
  {
    this.cpus =new Array();
    this.mi_texto ="";
    this.marcas =new Array();
  }

  ngOnInit(): void {

    this.cpus = this._cpuService.getCpu();
    this.getMarca();
  }

  getMarca(){
    this.cpus.forEach((cpu,index) =>{
      if(this.marcas.indexOf(cpu.marca) < 0) this.marcas.push(cpu.marca);
    });
    console.log(this.marcas);
  }

  addMarca(){
    this.marcas.push(this.mi_texto);
  }

  borrarMarca(indice : number){
    this.marcas.splice(indice,1);
  }

}
