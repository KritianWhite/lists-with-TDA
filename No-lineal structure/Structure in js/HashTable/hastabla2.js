class nodoPrincipal {
    constructor(dato) {
        this.dato = dato
        this.siguiente = null
        this.sublista = new Lista2()
    }
}

class HashTable2 {
    constructor() {
        this.primero = null
    }

    estavacia() {
        return this.primero === null
    }

    agregarCabeceras(dato) {
        if (this.estavacia()) {
            this.primero = this.ultimo = new nodoPrincipal(dato)
        } else {
            let auxiliar = new nodoPrincipal(dato)
            auxiliar.siguiente = this.primero
            this.primero = auxiliar
        }
    }

    agregarLista(dato) {
        let posAuxiliar = dato.id_categoria % 20

        let temporal = this.primero
        while (temporal !== null) {
            if (posAuxiliar === temporal.dato.id_categoria) {
                if (temporal.sublista.buscarDato(temporal.dato.id_categoria) === true) {
                    return
                } else {
                    temporal.sublista.insertarDato(dato)
                }
            }
        }
    }

    draw() {
        let temporal, cadena, cont;
        cont = 0;
        cadena = ""
        cadena += `
        digraph G{\n
        nodesep=.05;
        rankdir=DT;
        node [shape=record,width=.1,height=.1];\n
        `
        temporal = this.primero

        while(temporal !== null){
            cadena += "Node" + cont + `[label="${temporal.dato}"]\n`
            if (temporal !== this.primero){
                cadena += "Node" + (cont-1) + "->" + "Node" + cont + ";\n"
            }
            temporal = temporal.siguiente
            cont ++
        }
        cadena += "}"
        console.log(cadena)
    }
    
}


class nodo2 {
    constructor(dato) {
        this.dato = dato
        this.siguiente = null
    }
}

class Lista2 {
    constructor() {
        this.primero = null
    }
    estavacia() {
        return this.primero = null
    }

    insertarDato(dato) {
        if (this.estavacia()) {
            this.primero = this.ultimo = new nodo2(dato)
        } else {
            let auxiliar = new nodo2(dato)
            auxiliar.siguiente = this.primero
            this.primero = auxiliar
        }
    }

    buscarDato(dato_) {
        if (this.estavacia()) {
            console.log("No hay elementos")
        }
        let auxiliar = this.primero
        while (auxiliar != null) {
            if (auxiliar.dato.nombre === dato_) {
                return true
            }
            auxiliar = auxiliar.siguiente
        }
        return false
    }

    subgrafo(){
        let texto = ""
        let cont = 1000

        let temporal = this.primero
        while(temporal !== null){
            texto += "Node" + cont + "[label=\"" + temporal.dato.id_categoria +"\"];\n"

            if (temporal !== this.primero){
                texto += "Node" + (cont-1) + "->" + "Node" + cont + ";\n"
            }
            temporal = temporal.siguiente
            cont ++
        }
        return texto
    }

}



let ht = new HashTable2()
for (let i = 0; i < 20; i++) {
    ht.agregarCabeceras(i)
}

ht.draw()