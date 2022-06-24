/*
NOTA: Esta clase objeto no se esta importando a la 
Clase Lista circular doble ya que se estaba utilizando 
quokka para la realizacion de pruebas, de lo contrario 
solo debe de importarse en el archivo de la clase de la 
lista circular doble
*/

export class Canciones{
    constructor(nombreCancion, tipoCancion, tiempoCancion){
        this._nombreCancion = nombreCancion
        this._tipoCancion = tipoCancion
        this._tiempoCancion = tiempoCancion
    }
    get nombreCancion(){
        return this._nombreCancion
    }
    set nombreCancion(nombreCancion){
        this._nombreCancion = nombreCancion
    }
    get tipoCancion(){
        return this._tipoCancion
    }
    set tipoCancion(tipoCancion){
        this._tipoCancion = tipoCancion
    }
    get tiempoCancion(){
        return this._tiempoCancion
    }
    set tiempoCancion(tiempoCancion){
        this._tiempoCancion = tiempoCancion
    }

    toString(){
        return `Nombre: ${this._nombreCancion}, Tipo: ${this._tipoCancion}, Tiempo: ${this._tiempoCancion}`
    }
}