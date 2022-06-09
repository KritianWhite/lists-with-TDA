var Matriz, columna, fila;

class NodoOrtogonal {
  constructor(fila, columna, caracter) {
    this.fila = fila;
    this.columna = columna;
    this.caracter = caracter;
    this.anterior = null;
    this.siguiente = null;
    this.arriba = null;
    this.abajo = null;
  }

  getFila() {
    return this.fila;
  }

  getColumna() {
    return this.columna;
  }

  getCaracter() {
    return this.caracter;
  }

  setArriba(arriba) {
    this.arriba = arriba;
  }

  getArriba() {
    return this.arriba;
  }

  setAbajo(abajo) {
    this.abajo = abajo;
  }

  getAbajo() {
    return this.abajo;
  }

  setSiguiente(siguiente) {
    this.siguiente = siguiente;
  }

  getSiguiente() {
    return this.siguiente;
  }

  setAnterior(anterior) {
    this.anterior = anterior;
  }

  getAnterior() {
    return this.anterior;
  }

}

class MatrizOrtogonal {
  constructor() {
    this.head = null;
    this.size = 0;
    this.SizeG = 0;
  }

  getHead() {
    return this.head;
  }

  getSize() {
    return this.size;
  }

  getSizeG() {
    return this.SizeG;
  }

  vacio() {
    return this.head === null;
  }

  autofilling(fila, columna, caracter) {
    for (var i = 1, _pj_a = fila + 1; i < _pj_a; i += 1) {
      for (var j = 1, _pj_b = columna + 1; j < _pj_b; j += 1) {
        this.insertData(i, j, caracter);
      }
    }
  }

  insertData(fila, columna, caracter) {
    var aux, aux2, new_node;
    this.SizeG += 1;

    if (this.vacio()) {
      new_node = new NodoOrtogonal(fila, columna, caracter);
      this.head = new_node;
      this.size += 1;
    } else {
      aux = this.head;

      while (aux.abajo !== null) {
        aux = aux.abajo;
      }

      if (this.size !== fila) {
        this.size += 1;
        new_node = new NodoOrtogonal(fila, columna, caracter);
        aux.abajo = new_node;
        new_node.arriba = aux;
      } else {
        while (aux.siguiente !== null) {
          aux = aux.siguiente;
        }

        new_node = new NodoOrtogonal(fila, columna, caracter);
        aux.siguiente = new_node;
        new_node.anterior = aux;

        if (this.size > 1) {
          aux2 = aux.arriba.siguiente;
          aux2.abajo = new_node;
          new_node.arriba = aux2;
        }
      }
    }
  }

  searchData(fila, columna) {
    var aux, tmp;
    tmp = aux = null;

    if (this.head !== null) {
      tmp = this.head;

      while (tmp !== null) {
        aux = tmp;

        while (aux !== null) {
          if (Number.parseInt(fila) === Number.parseInt(aux.fila) && Number.parseInt(columna) === Number.parseInt(aux.columna)) {
            return aux.caracter;
          }

          aux = aux.siguiente;
        }

        tmp = tmp.abajo;
      }

      return null;
    } else {
      console.log("Matriz vacia");
      return;
    }
  }

  printMatrixO() {
    var aux, tmp;
    tmp = aux = null;

    if (this.head !== null) {
      tmp = this.head;

      while (tmp !== null) {
        aux = tmp;

        while (aux !== null) {
          console.log(aux.caracter + " ");
          aux = aux.siguiente;
        }

        console.log("");
        tmp = tmp.abajo;
      }
    } else {
      return console.log("Matriz vacia");
    }
  }

}

fila = 6;
columna = 9;
Matriz = new MatrizOrtogonal();
Matriz.autofilling(fila, columna, "*");
Matriz.printMatrixO();
