class NodoCabecera{
    constructor(id){
        this.id = id                // dato recibido (nodo)
        this.siguiente = null
        this.anterior = null
        this.acceso = null          // apuntador para un nodo celda
    }
    get acceso(){
        return this.acceso
    }
    set acceso(nuevo_acceso){
        this.acceso = nuevo_acceso
    }
}

class listaCabecera{
    constructor(tipo){
        this.primero = null
        this.ultimo = null 
        this.tipo = tipo    // Si son columnas o filas*
        this.size = 0
    }

    insertar_NodoCabecera(nuevo){
        this.size += 1
        if (this.primero === null){
            this.primero = nuevo
            this.ultimo = nuevo
        }
        else{
            if (nuevo.id < this.primero.id){
                nuevo.siguient = this.primero
                this.primero.anterior = nuevo
                this.primero = nuevo
            }
            else if (nuevo.id > this.ultimo.id){
                this.ultimo.siguient = nuevo
                nuevo.anterior = this.ultimo
                this.ultimo = nuevo
            }
            else{
                let temporal = this.primero
            }
        }
    }
}