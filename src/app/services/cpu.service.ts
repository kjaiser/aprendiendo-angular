import { Injectable } from "@angular/core";
import { cpu } from "models/compCPU";

@Injectable()
export class cpuService{
    public cpus : Array<cpu>;

    constructor(){
        this.cpus = [
            new cpu('scorpio', 'raptor', 'asus', 1000, 10,true),
            new cpu('debian', 'gammer', 'advance', 1500, 2, false),
            new cpu('scorpio', 'raptor', 'asus', 1000, 15,true),
            new cpu('debian', 'gammer', 'advance', 1500, 3,true)
          ];
    }

    getCpu(): Array<cpu>{
        return this.cpus;
    }
}