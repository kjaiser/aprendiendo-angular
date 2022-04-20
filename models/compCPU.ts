export class cpu{

/*
    public nombre   : string;
    public modelo   : string;
    public marca    : string;
    public serie    : number;
    public cantidad : number;

    constructor(nombre, modelo, marca, serie, cantidad){
        this.nombre = nombre;
        this.modelo   = modelo;
        this.marca    = marca;
        this.serie    = serie;
        this.cantidad = cantidad;
    }
*/
    //es lo mismo que arriba pero resumido

    constructor(
        public nombre   : string,
        public modelo   : string,
        public marca    : string,
        public serie    : number,
        public cantidad : number,
        public ventas   : boolean
        ){}

}