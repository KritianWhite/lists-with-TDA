/*
*Este arbol ABB si funciona correctamente, revisar ABB.py
*/
class Nodo {
  constructor(id) {
    this.id = id;
    this.izquierda = null;
    this.derecha = null;
  }
}

class ArbolABB {
  constructor() {
    this.raiz = null;
  }

  estavacia() {
    return this.raiz === null;
  }

  agregar(id, node = this.raiz) {
    id = id.replace(/ /g, "_")
    if (!node) {
      this.raiz = new Nodo(id);
      return;
    }

    if (id < node.id) {
      if (node.izquierda) {
        return this.agregar(id, node.izquierda);
      }
      node.izquierda = new Nodo(id);
      return;
    } else {
      if (node.derecha) {
        return this.agregar(id, node.derecha);
      }
      node.derecha = new Nodo(id);
      return;
    }
  }

  preOrden(node = this.raiz) {
    if(!node){
      return;
    }
    console.log(node.id);
    this.preOrden(node.izquierda)
    this.preOrden(node.derecha)
  }

  postOrden(node = this.root) {
    if(!node){
      return;
    }
    this.postOrden(node.izquierda);
    this.postOrden(node.derecha);
    console.log(node.id);
  }

  InOrden(node = this.raiz) {
    if(!node){
      return;
    }
    this.InOrden(node.izquierda);
    console.log(node.id);
    this.InOrden(node.derecha);
  }

  graficar(raiz) {
    var cadena = '';
    cadena += "digraph G { \n"
    cadena +="rankdir=TB; \n";
    cadena += "node [shape = record, color=black , style=filled, fillcolor=gray93];\n";
    cadena += this.__graficadora(raiz);
    cadena += "} \n";
    d3.select("#lienzo").graphviz().width(1350).height(500).renderDot(cadena);
  }

  __graficadora(root) {
    var cadena;
    cadena = "";

    if (root.derecha === null && root.izquierda === null) {
      cadena = "nodo" + root.id.toString() + "[label =\" " + root.id.toString().replace(/_/g, " ") + "\"]; \n";
    } else {
      cadena = "nodo" + root.id.toString() + "[label =\"<C0>| " + root.id.toString().replace(/_/g, " ") + "|<C1> \"]; \n";
    }

    if (root.izquierda !== null) {
      cadena = cadena + this.__graficadora(root.izquierda) + "nodo" + root.id.toString() + ":C0->nodo" + root.izquierda.id.toString() + "\n";
    }

    if (root.derecha !== null) {
      cadena = cadena + this.__graficadora(root.derecha) + "nodo" + root.id.toString() + ":C1->nodo" + root.derecha.id.toString() + "\n";
    }
    return cadena
  }

}

let arbolito = new ArbolABB();
/*
arbolito.agregar(15);
arbolito.agregar(5);
arbolito.agregar(3);
arbolito.agregar(12);
arbolito.agregar(10);
arbolito.agregar(13);
arbolito.agregar(6);
arbolito.agregar(7);
arbolito.agregar(16);
arbolito.agregar(20);
arbolito.agregar(18);
arbolito.agregar(23);
*/

arbolito.agregar("Alice Kellen");
arbolito.agregar("John le Carré");
arbolito.agregar("Aba Frank");
arbolito.agregar("Sthephenie Meyer");
arbolito.agregar("Paulo Coelho");
arbolito.agregar("Martha Cerda");


arbolito.preOrden(arbolito.raiz);
arbolito.postOrden(arbolito.raiz);
arbolito.InOrden(arbolito.raiz);
arbolito.graficar(arbolito.raiz);
