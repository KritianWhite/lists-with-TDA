class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
    }

}

class Cola {
    constructor() {
        this.frente = null;
        this.atras = null;
        this.tamanio = 0;
    }

    getTamanio() {
        return this.tamanio;
    }

    arribo(dato) {
        var nodo_nuevo;
        nodo_nuevo = new Nodo(dato);

        if (this.frente === null) {
            this.frente = nodo_nuevo;
        } else {
            this.atras.siguiente = nodo_nuevo;
        }

        this.atras = nodo_nuevo;
        this.tamanio += 1;
    }

    atencion() {
        var dato;
        dato = this.frente.dato;
        this.frente = this.frente.siguiente;

        if (this.frente === null) {
            this.atras = null;
        }

        this.tamanio -= 1;
        return dato;
    }

    esVacio() {
        return this.frente === null;
    }

    en_frente() {
        return this.frente.dato.toString();
    }

    getTamanio() {
        return this.tamanio;
    }

    mover_al_final() {
        var dato;
        dato = this.atencion();
        this.arribo(dato);
        return dato;
    }

    listar() {
        var aux;
        aux = this.frente;

        if (this.esVacio()) {
            return console.log("La cola esta vacia");
        }

        this.temp = [];

        while (aux !== null) {
            this.temp.append(aux.dato);
            aux = aux.siguiente;
        }

        console.log(this.temp);
    }

    graficarDot(){
        var temporal, cadena, cont
        temporal = this.frente
        cont = 0
        cadena = ""
        cadena += "digraph G { \n";
        cadena += "rankdir=RL \n";

        while (temporal !== null) {
            cadena += "Node" + cont + "[label=\"" + temporal.dato+"\"];\n";

            if (temporal !== this.frente) {
                cadena += "Node" + (cont) + " -> " + "Node" + (cont - 1) + ";\n";
            }

            temporal = temporal.siguiente;
            cont += 1;
        }


        cadena += "}";
        console.log(cadena);
        d3.select("#lienzo").graphviz().width(1000).height(300).renderDot(cadena);
    }

}

//.nommbre+ " \n" + temporal.dato.nommbre_Libro+ "\nCantidad: "+ temporal.dato.cantidad_Libros + 

let colaa = new Cola()
colaa.arribo("Juan")
colaa.arribo("Jose")
colaa.arribo("Allan")
colaa.arribo("Carlos")
colaa.arribo("Josepo")
colaa.arribo("Luis")
colaa.graficarDot()