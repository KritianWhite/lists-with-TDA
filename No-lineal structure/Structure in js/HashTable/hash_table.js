/**
 * 
 * 
 *      HASHTABLE FUNCIONANDO AL 100
 *      (METODO DISTINTO AL DEL ARCHIVO HashTable)
 * 
 * 
 */

class HashTable {
  constructor(max_size, max_size2) {
    this.head = null;
    this.max_size = max_size;

    for (let i = 0; i < max_size; i++) {
      this.createNode(max_size2);
    }
  }

  isVoid() {
    return this.head == null;
  }

  getNodeByIndex(index) {
    let i = 0;

    let aux = this.head;
    while (aux != null) {
      if (i == index) return aux;

      i++;
      aux = aux.next;
    }
    return null;
  }

  insert(key, value) {
    const pos = key % this.max_size;

    const nodo = this.getNodeByIndex(pos);

    nodo.insert(value);
  }

  createNode(max_size) {
    let nodo = new HashNode(max_size);
    if (this.isVoid()) {
      this.head = nodo;
      return;
    }

    let aux = this.head;
    while (aux.next != null) {
      aux = aux.next;
    }
    aux.next = nodo;
  }

  graph() {
    let str = "digraph G {\n";
    str += "rankdir=LR;\n";

    let aux = this.head;
    let i = 0;
    while (aux != null) {
      str += "nodo" + i + ' [label="' + i + '"];\n';

      str += this.graphList(aux, i);

      i++;
      aux = aux.next;
    }

    str += "}";
    return str;
  }

  graphList(node, i) {
    let str = "";
    let aux = node.head;
    let j = 0;

    str += "nodo" + i + " -> nodo" + i + "C" + j + ";\n";

    while (aux != null) {
      if (aux.obj != null) {
        str +=
          "nodo" +
          i +
          "C" +
          j +
          '[label= "' +
          aux.obj.id_categoria +
          "|" +
          aux.obj.company +
          '"];\n';
      } else {
        str += "nodo" + i + "C" + j + '[label= "null"];\n';
      }

      if (aux.next != null) {
        str += "nodo" + i + "C" + j + " -> nodo" + i + "C" + (j + 1) + ";\n";
      }

      j++;
      aux = aux.next;
    }
    return str;
  }
}

class HashNode {
  constructor(max_size) {
    this.next = null;
    this.max_size = max_size;

    this.head = null;

    for (let i = 0; i < max_size; i++) {
      this.createElement();
    }
  }

  isVoid() {
    return this.head == null;
  }

  insert(obj) {
    let aux = this.head;

    while (aux != null) {
      if (aux.obj == null) {
        aux.obj = obj;
        return;
      }

      aux = aux.next;
    }
  }

  createElement() {
    let nodo = new HashElement();
    if (this.isVoid()) {
      this.head = nodo;
      return;
    }

    let aux = this.head;
    while (aux.next != null) {
      aux = aux.next;
    }
    aux.next = nodo;
  }
}

class HashElement {
  constructor() {
    this.next = null;
    this.obj = null;
  }
}
