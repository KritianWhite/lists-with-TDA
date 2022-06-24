/*
NOTA: Esta clase objeto no se esta importando a la 
Clase Lista doble ya que se estaba utilizando 
quokka para la realizacion de pruebas, de lo contrario 
solo debe de importarse en el archivo de la clase de la 
lista doble
*/

export class Persona{
    constructor(nombre, apellido, edad){
        this._nombre = nombre
        this._apellido = apellido
        this._edad = edad
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    get apellido(){
        return this._apellido
    }
    set apellido(apellido){
        this._apellido = apellido
    }
    get edad(){
        return this._edad
    }
    set edad(edad){
        this._edad = edad
    }
    toString(){
        return `Nombre: ${this._nombre}, Apellido: ${this._apellido}, Edad: ${this._edad}`
    }
}