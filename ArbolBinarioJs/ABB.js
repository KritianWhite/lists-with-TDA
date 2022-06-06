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
}

arbolito = new ArbolABB();
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

arbolito.preOrden(arbolito.raiz);
arbolito.postOrden(arbolito.raiz);
arbolito.InOrden(arbolito.raiz);
