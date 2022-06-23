class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
    }

}

class Pila {
    constructor() {
        this.cima = null;
        this.tamanio = 0;
    }

    getTamanio() {
        return this.tamanio;
    }

    esVacio() {
        return this.cima === null;
    }

    Cima() {
        if (this.cima !== null) {
            return this.cima.dato;
        } else {
            return null;
        }
    }

    apilar(dato) {
        var nuevo_nodo;
        this.tamanio += 1;
        nuevo_nodo = new Nodo(dato);

        if (this.esVacio()) {
            this.cima = nuevo_nodo;
        } else {
            nuevo_nodo.siguiente = this.cima;
            this.cima = nuevo_nodo;
        }
    }

    desapilar() {
        var nodo_a_retirar;
        nodo_a_retirar = null;

        if (!this.esVacio()) {
            nodo_a_retirar = this.cima;
            this.cima = this.cima.siguiente;
            this.tamanio -= 1;
        }

        return nodo_a_retirar;
    }

    listar() {
        var aux;
        aux = this.cima;

        if (this.esVacio()) {
            return console.log("La pila esta vacia");
        }

        console.log("-----------------");

        while (aux !== null) {
            console.log("|\t" + aux.dato.toString() + "\t|");
            console.log("-----------------");
            aux = aux.siguiente;
        }
    }

    graficarDot(){
        let temporal = this.cima
        let cadena = ""
        let nodo = ""

        while(temporal !== null){
            nodo += temporal.dato + " | "
            temporal = temporal.siguiente
        }

        cadena += `digraph G {\nlabel = \"Pila\" \n rankdir=LR;nodo1 [label="${nodo}" shape = "record" ];\n}`

        d3.select("#lienzo").graphviz().height(500).width(500).renderDot(cadena)

    }


}


let pila_ = new Pila()

pila_.apilar("Pizza de peperoni")
pila_.apilar("Pizza de Hawaiiana")
pila_.apilar("Pizza de Salmon")
pila_.apilar("Pizza de Mucho queso")
pila_.apilar("Pizza de Batman")
//pila_.desapilar()
pila_.graficarDot()
