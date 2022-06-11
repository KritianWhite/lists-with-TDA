var ltss;

class Nodo {
  constructor(asiento, name) {
    this.asiento = asiento;
    this.name = name;
    this.siguiente = null;
    this.anterior = null;
  }

}

class lista {
  constructor() {
    this.raiz = null;
    this.ultimo = null;
    this.correlativo = 1;
  }

  add(nombre) {
    var nuevo;
    nuevo = new Nodo(this.correlativo, nombre);
    this.correlativo += 1;

    if (this.raiz === null) {
      this.raiz = this.ultimo = nuevo;
      return;
    } else {
      this.ultimo.siguiente = nuevo;
      nuevo.anterior = this.ultimo;
      this.ultimo = nuevo;
      return;
    }
  }

  print() {
    var aux;
    aux = this.raiz;

    while (aux !== null) {
      console.log(`Numero de asiento: ${aux.asiento}, Pasajero: ${aux.name}\n`);
      aux = aux.siguiente;
    }
  }

  inverse_print() {
    var aux;
    aux = this.ultimo;

    while (aux !== null) {
      console.log(`Numero de asiento: ${aux.asiento}, Pasajero: ${aux.name}\n`);
      aux = aux.anterior;
    }
  }

}

class nodoL {
  constructor(nombre) {
    this.nombre = nombre;
    this.lts = new lista();
    this.siguiente = this.anterior = null;
  }

}

class Lista_Listas {
  constructor() {
    this.raiz = null;
    this.ultimo = null;
  }

  search(name) {
    var aux;
    aux = this.raiz;

    while (aux !== null) {
      if (aux.nombre === name) {
        return true;
      }

      aux = aux.siguiente;
    }

    return false;
  }

  get(name) {
    var aux;
    aux = this.raiz;

    while (aux !== null) {
      if (aux.nombre === name) {
        return aux;
      }

      aux = aux.siguiente;
    }

    return null;
  }

  add(aeronave, pasajero) {
    var nuevo, tmp;

    if (this.raiz === null) {
      this.raiz = this.ultimo = new nodoL(aeronave);
      this.raiz.lts.add(pasajero);
      return;
    } else {
      if (this.search(aeronave) === false) {
        nuevo = new nodoL(aeronave);
        nuevo.lts.add(pasajero);
        this.ultimo.siguiente = nuevo;
        nuevo.anterior = this.ultimo;
        this.ultimo = nuevo;
        return;
      } else {
        tmp = this.get(aeronave);
        tmp.lts.add(pasajero);
        return;
      }
    }
  }

  print() {
    var aux;
    aux = this.raiz;

    while (aux !== null) {
      console.log(`----------------Aeronave:${aux.nombre}------------`);
      aux.lts.print();
      aux = aux.siguiente;
    }
  }

  graficar() {
    var cadena, cont, cont2, horizontal, vertical;
    cadena = "";
    cadena += "digraph G { \n";
    cont = 0;
    vertical = this.raiz;

    while (vertical !== null) {
      cadena +=`"${vertical.nombre}"[shape=box, rankdir=UD, style="filled", label="${vertical.nombre}", pos="0,-${cont.toString()}!"]`;
      horizontal = vertical.lts.raiz;
      cont2 = 0;

      while (horizontal !== null) {
        cadena += `"${horizontal.name}"[shape=box, rankdir=LR, style="filled", label="${horizontal.name}", pos="${cont2.toString()},-${cont.toString()}!"]`;
        cont2 += 1;
        horizontal = horizontal.siguiente;
      }

      cont += 1;
      vertical = vertical.siguiente;
    }

    vertical = this.raiz;

    while (vertical !== null) {
      if (vertical === this.raiz) {
        cadena += `"${vertical.nombre}"`;
      } else {
        cadena += `->"${vertical.nombre}"`;
      }

      vertical = vertical.siguiente;
    }

    cadena += "\n";
    vertical = this.raiz;

    while (vertical !== null) {
      horizontal = vertical.lts.raiz;

      if (horizontal !== null) {
        cadena += `"${vertical.nombre}"->"${horizontal.name}"`;

        while (horizontal !== null) {
          if (horizontal === vertical.lts.raiz) {
            cadena += `"${horizontal.name}"`;
          } else {
            cadena += `->"${horizontal.name}"`;
          }

          horizontal = horizontal.siguiente;
        }
      }

      cadena += "\n";
      vertical = vertical.siguiente;
    }

    vertical = this.raiz;
    cadena += "\n{rank=same;";

    while (vertical !== this.ultimo) {
      cadena += `"${vertical.nombre}",`;
      vertical = vertical.siguiente;
    }

    cadena += `"${vertical.nombre}"`;
    cadena += "}\n";
    cadena += "}\n";

    d3.select("#lienzo").graphviz().width(1350).height(800).renderDot(cadena);


  }

}

ltss = new Lista_Listas();
ltss.add("Avion 1", "Carlos");
ltss.add("Avion 1", "Andree");
ltss.add("Avion 1", "Marvin");
ltss.add("Avion 1", "Juan");
ltss.add("Avion 2", "Marlon");
ltss.add("Avion 2", "Antonio");
ltss.add("Avion 3", "Everest");
ltss.add("Avion 3", "Sergio");
ltss.add("Avion 3", "Miguel");
ltss.add("Avion 3", "Sara");
ltss.add("Avion 3", "Maria");
ltss.print();
ltss.graficar();
