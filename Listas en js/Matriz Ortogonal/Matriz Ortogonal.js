alert("Hola bb")
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


  drawMatrix() {
    var aux, contenido, file, tmp;
    tmp = null;
    aux = null;

    if (this.head !== null) {
      contenido = "";
      contenido += "\ndigraph html {\nabc [shape = none, margin = 0, label=<\n<TABLE BORDER = \"1\" CELLBORDER = \"1\" CELLSPACING=\"0\" CELLPADDING=\"10\">\n";
      tmp = this.head;

      while (tmp !== null) {
        aux = tmp;
        contenido += "<TR>";

        while (aux !== null) {
          contenido += `<TD BGCOLOR="#ffffff">${aux.caracter}</TD>`;
          aux = aux.siguiente;
        }

        contenido += "</TR>";
        tmp = tmp.abajo;
      }

      contenido += "</TABLE>>];\n}";
      d3.select("#lienzo").graphviz()
        .width(1000)
        .height(700)
        .renderDot(contenido)

    } else {
      return console.log("Error al tratar de dibujar la matriz");
    }
  }

  /*graficarDot() {
    var aux, aux2, cont, grafo, group, rank, x_fila, y_columna;

    grafo = "digraph T{ \nnode[shape=box fontname=\"Arial\" fillcolor=\"white\" style=filled ]";
    grafo += "\nroot[label = \"capa: " + this.capa + "\", group=1]\n";
    grafo += "label = \"Matriz Dispersa\" \nfontname=\"Arial Black\" \nfontsize=\"15pt\" \n\n\n";

    x_fila = this.filas.primero;
    while (x_fila != null) {
        grafo += `F${x_fila.id}[label="${x_fila.id}",fillcolor="plum",group=1];\n`;
        x_fila = x_fila.siguiente;
    }

    x_fila = this.filas.primero;
    while (x_fila != null) {
        if (x_fila.siguiente !== null) {
            grafo += `F${x_fila.id}->F${x_fila.siguiente.id};\n`;
            grafo += `F${x_fila.siguiente.id}->F${x_fila.id};\n`;
        }

        x_fila = x_fila.siguiente;
    }

    y_columna = this.columnas.primero;

    while (y_columna != null) {
        group = Number.parseInt(y_columna.id) + 1;
        grafo += `C${y_columna.id}[label="C${y_columna.id}",fillcolor="powderblue",group=${group.toString()}];\n`;
        y_columna = y_columna.siguiente;
    }

    cont = 0;
    y_columna = this.columnas.primero;

    while (y_columna != null) {
        if (y_columna.siguiente !== null) {
            grafo += `C${y_columna.id}->C${y_columna.siguiente.id}\n`;
            grafo += `C${y_columna.siguiente.id}->C${y_columna.id}\n`;
        }

        cont += 1;
        y_columna = y_columna.siguiente;
    }

    y_columna = this.columnas.primero;
    x_fila = this.filas.primero;
    grafo += `root->F${x_fila.id};\n root->C${y_columna.id};\n`;
    grafo += "{rank=same;root;";
    cont = 0;
    y_columna = this.columnas.primero;

    while (y_columna != null) {
        grafo += `C${y_columna.id};`;
        cont += 1;
        y_columna = y_columna.siguiente;
    }

    grafo += "}\n";
    aux = this.filas.primero;
    aux2 = aux.acceso;
    cont = 0;

    while (aux != null) {
        cont += 1;

        while (aux2 != null) {
            grafo += `N${aux2.x}_${aux2.y}[label="${aux2.caracter}",group="${Number.parseInt(aux2.y) + 1}", fillcolor="white"];\n`;
            aux2 = aux2.derecha;
        }

        aux = aux.siguiente;

        if (aux != null) {
            aux2 = aux.acceso;
        }
    }

    aux = this.filas.primero;
    aux2 = aux.acceso;
    cont = 0;

    while (aux != null) {
        rank = "{" + `rank = same;F${aux.id};`;
        cont = 0;

        while (aux2 != null) {
            if (cont == 0) {
                grafo += `F${aux.id}->N${aux2.x}_${aux2.y};\n`;
                grafo += `N${aux2.x}_${aux2.y}->F${aux.id};\n`;
                cont += 1;
            }

            if (aux2.derecha != null) {
                grafo += `N${aux2.x}_${aux2.y}->N${aux2.derecha.x}_${aux2.derecha.y};\n`;
                grafo += `N${aux2.derecha.x}_${aux2.derecha.y}->N${aux2.x}_${aux2.y};\n`;
            }

            rank += `N${aux2.x}_${aux2.y};`;
            aux2 = aux2.derecha;
        }

        aux = aux.siguiente;

        if (aux != null) {
            aux2 = aux.acceso;
        }

        grafo += rank + "}\n";
    }

    aux = this.columnas.primero;
    aux2 = aux.acceso;
    cont = 0;

    while (aux != null) {
        cont = 0;
        grafo += "";

        while (aux2 != null) {
            if (cont == 0) {
                grafo += `C${aux.id}->N${aux2.x}_${aux2.y};\n`;
                grafo += `N${aux2.x}_${aux2.y}->C${aux.id};\n`;
                cont += 1;
            }

            if (aux2.abajo != null) {
                grafo += `N${aux2.abajo.x}_${aux2.abajo.y}->N${aux2.x}_${aux2.y};\n`;
                grafo += `N${aux2.x}_${aux2.y}->N${aux2.abajo.x}_${aux2.abajo.y};\n`;
            }

            aux2 = aux2.abajo;
        }

        aux = aux.siguiente;

        if (aux != null) {
            aux2 = aux.acceso;
        }
    }
    grafo += "}";

    d3.select("#lienzo").graphviz()
        .width(1000)
        .height(700)
        .renderDot(grafo)*/

}


fila = 6;
columna = 9;
Matriz = new MatrizOrtogonal();
Matriz.autofilling(fila, columna, "holaaaa jejejeje");
//Matriz.printMatrixO();
Matriz.drawMatrix()
