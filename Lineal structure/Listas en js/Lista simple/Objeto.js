/*
NOTA: Esta clase objeto no se esta importando a la 
Clase Lista simple ya que se estaba utilizando 
quokka para la realizacion de pruebas, de lo contrario 
solo debe de importarse en el archivo de la clase de la 
lista simple
*/

class Persona{
    
    constructor(nombre, edad, apellido){
        this._nombre = nombre
        this._edad = edad
        this._apellido = apellido
    }
    
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    
    get edad(){
        return this._edad
    }
    set edad(edad){
        this._edad = edad
    }
    
    get apellido(){
        return this._apellido
    }
    set apellido(apellido){
        this._apellido = apellido
    }
    toString(){
        return `nombre: ${this._nombre}, apellido: ${this._apellido}, edad: ${this._edad}`
    }
}