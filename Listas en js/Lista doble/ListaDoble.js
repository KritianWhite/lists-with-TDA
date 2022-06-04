
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

class Nodo{
    constructor(dato){
        this.dato = dato 
        this.siguiente = null
        this.anterior = null
    }
}

class listaDoble{

    constructor(){
        this.primero = null
        this.ultimo = null
        this.size = 0
    }

    estaVacia(){
        return this.primero === null
    }

    tamanio(){
        return this.size
    }

    agregarAlinicio(dato){
        if (this.estaVacia()){
            this.primero = this.ultimo = new Nodo(dato)
        }
        else{
            let auxiliar = new Nodo(dato)
            auxiliar.siguiente = this.primero
            this.primero.anterior = auxiliar
            this.primero = auxiliar
        }
        this.size += 1
    }

    agregarAlfinal(dato){
        if (this.estaVacia()){
            this.primero = this.ultimo = new Nodo(dato)
        }
        else{
            let auxiliar = this.ultimo
            this.ultimo = auxiliar.siguiente = new Nodo(dato)
            this.ultimo.anterior = auxiliar
        }
        this.size += 1
    }

    eliminarAlinicio(){
        if (this.estaVacia()){
            console.log("Lista vacia")
        }
        else if(this.primero.siguiente === null){
            this.primero = this.ultimo = null
            this.size = 0
        }
        else{
            this.primero = this.primero.siguiente
            this.primero.anterior = null
            this.size -= 1
        }
    }

    eliminarAlfinal(){
        if (this.estaVacia()){
            console.log("Lista vacia")
        }
        else if (this.primero.siguiente === null){
            this.primero = this.ultimo = null
            this.size = 0
        }
        else{
            this.ultimo = this.ultimo.anterior
            this.ultimo.siguiente = null
            this.size -= 1
        }
    }

    recorrerLista(){
        if (this.estaVacia()){
            console.log("No hay elementos en la lista")
        }
        let auxiliar = this.primero
        while (auxiliar != null){
            console.log((auxiliar.dato.toString()))
            auxiliar = auxiliar.siguiente
        }
        console.log("\n")
    }

    buscarDato(dato_){
        if (this.primero === null){
            console.log("No se encontraron elementos en la lista")
        }
        let auxiliar = this.primero
        while (auxiliar != null){
            if (auxiliar.dato.nombre === dato_){
                console.log(auxiliar.dato.toString()+ ", dato encontrado")
            }
            auxiliar = auxiliar.siguiente
        }
        return dato_ + ", dato no encontrado"
    }

    ordenamientoBurbuja(){
        let auxiliar
        let actual = auxiliar = null
        if (!this.estaVacia()){
            actual = this.primero
            while (actual.siguiente){
                auxiliar = actual.siguiente
                while (auxiliar){
                    if (auxiliar.dato.apellido < actual.dato.apellido){
                        let temporal = actual.dato
                        actual.dato = auxiliar.dato
                        auxiliar.dato = temporal
                    }
                    auxiliar = auxiliar.siguiente
                }
                actual = actual.siguiente
            }
        }
        else{
            console.log("No se encontraron elementos")
        }
    }
}

console.log("Hola mundo")

let listaPersonas = new listaDoble();
listaPersonas.agregarAlfinal(new Persona("Carlos", "Soto", 20))
listaPersonas.agregarAlinicio(new Persona("Alan", "Walker", 36))
listaPersonas.agregarAlinicio(new Persona("Daniel", "Barillas",15))
listaPersonas.agregarAlinicio(new Persona("Christian", "Blanco", 21))
listaPersonas.agregarAlinicio(new Persona("Javier", "Santos", 40))
listaPersonas.ordenamientoBurbuja()
listaPersonas.buscarDato("Jaime")
listaPersonas.recorrerLista()