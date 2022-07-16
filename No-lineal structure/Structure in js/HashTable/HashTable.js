/**
 * 
 * 
 *    REVISAR LO DEL D3, TIRA UN ERROR 
 *    ALGO RARO SOBRE UNAS COMILLAS DOBLES
 * 
 * 
 */


class Dic {
  constructor(llave, valor) {
    this._llave = llave;
    this._valor = valor;
  }

  get llave() {
    return this._llave;
  }

  get valor() {
    return this._valor;
  }

  set llave(llave) {
    this._llave = llave;
  }

  set valor(valor) {
    this._valor = valor;
  }

  toString() {
    return `${this.llave}: ${this.valor}`;
  }
}

class Nodo {
  constructor(dato) {
    this.dato = dato;
    this.siguiente = null;
  }
}

class listaSimple {
  constructor() {
    this.primero = null;
    this.ultimo = null;
  }

  estavacia() {
    return this.primero === null;
  }

  agregarAlinicio(dato) {
    if (this.estavacia()) {
      this.primero = this.ultimo = new Nodo(dato);
    } else {
      let auxiliar = new Nodo(dato);
      auxiliar.siguiente = this.primero;
      this.primero = auxiliar;
    }
  }

  agregarAlfinal(dato) {
    if (this.estavacia()) {
      this.primero = this.ultimo = new Nodo(dato);
    } else {
      let auxiliar = this.ultimo;
      this.ultimo = new Nodo(dato);
      auxiliar.siguiente = this.ultimo;
    }
  }

  eliminarAlinicio() {
    if (this.estavacia()) {
      console.log("Lista vacia");
    } else if (this.primero === this.ultimo) {
      this.primero = this.ultimo = null;
    } else {
      this.primero = this.primero.siguiente;
    }
  }

  eliminarAlfinal() {
    if (this.estavacia()) {
      console.log("Lista vacia");
    } else if (this.primero === this.ultimo) {
      this.primero = this.ultimo = null;
    } else {
      let auxiliar = this.primero;
      while (auxiliar.siguiente != this.ultimo) {
        auxiliar = auxiliar.siguiente;
      }
      auxiliar.siguiente = null;
    }
  }

  recorrerLista() {
    if (this.estavacia()) {
      console.log("La lista esta vacia");
    }
    let auxiliar = this.primero;
    while (auxiliar != null) {
      console.log(auxiliar.dato.toString());
      auxiliar = auxiliar.siguiente;
    }
    console.log("\n");
  }

  tamanio() {
    var contador = 0;
    if (this.estavacia()) {
      return 0;
    }
    let auxiliar = this.primero;
    while (auxiliar != null) {
      contador += 1;
      auxiliar = auxiliar.siguiente;
    }
    //console.log("Número de elementos de la lista: " + contador);
    return contador;
  }

  buscarDato(llave) {
    if (this.estavacia()) {
      console.log("No hay elementos");
    }
    let auxiliar = this.primero;
    while (auxiliar != null) {
      if (auxiliar.dato.llave === llave) {
        //console.log(auxiliar.dato.toString() + ", nombre encontrado.");
        return auxiliar.dato.valor;
      }
      auxiliar = auxiliar.siguiente;
    }
    return undefined;
  }

  eliminar(llave) {
    //console.log(llave);
    let nodo_a_borrar = null, current = null;
    if (this.tamanio() == 0) {
      return false;
    } else if (this.primero.dato.llave == llave) {
      this.primero = this.primero.siguiente;
      return true;
    } else {
      current = this.primero;
      try {
        while (current.siguiente.dato.llave != llave) {
          current = current.siguiente;
        }
        nodo_a_borrar = current.siguiente;
        current.siguiente = nodo_a_borrar.siguiente;
        if (nodo_a_borrar === this.ultimo) {
          this.ultimo = current;
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  }

  graficarDot() {
    let aux = this.primero;
    //let cont = 0;
    let cadena = "";
    //conectores = [this.primero.dato.llave, cadena];

    while (aux !== null) {
      //console.log(aux.dato.llave, ":", aux.dato.valor)
      cadena += `"${aux.dato.llave}"` + '[label="' + aux.dato.llave + ":" + aux.dato.valor + '"];\n';
      //cadena += `"${aux.dato.llave}"` + " -> " + `"${aux.siguiente.dato.llave}"` + '\n';
      //cont += 1;
      aux = aux.siguiente;
    }
    aux = this.primero;
    console.log("ultima llave: ", this.ultimo.dato.llave);
    while (aux !== this.ultimo) {
      //console.log(aux.dato.llave, " -> ", `${aux.siguiente.dato.llave}`)
      cadena += `"${aux.dato.llave}"` + " -> " + `"${aux.siguiente.dato.llave}"[dir=both]` + ';\n';
      aux = aux.siguiente;
    }
    //console.log(cadena);
    return [this.primero.dato.llave, cadena];
  }
}

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.large = 0;
  }

  _hash(llave) {
    let hash = 0;
    for (let i = 0; i < llave.length; i++) {
      hash += llave % this.table.length;;
    }
    return hash
  }

  set(llave, value) {
    const indice = this._hash(llave);
    if (this.table[indice] === undefined) {
      this.table[indice] = new listaSimple();
      //console.log("Si existe!!!");
      this.table[indice].agregarAlfinal(new Dic(llave, value));
    } else {
      this.table[indice].agregarAlfinal(new Dic(llave, value));
      //this.table[indice].recorrerLista();
    }
  }

  get(llave) {
    const indice = this._hash(llave);
    const lts = this.table[indice];
    if (lts !== undefined) {
      const dato_a_encontrar = lts.buscarDato(llave);
      if (dato_a_encontrar !== undefined) {
        return dato_a_encontrar;
      }
      return dato_a_encontrar;
    }
  }

  remove(llave) {
    const indice = this._hash(llave);
    if (this.table[indice] && this.table[indice].tamanio()) {
      this.table[indice].eliminar(llave);
      return true;
    }
    return false;
  }

  show() {
    let cadena = "";
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        console.log(String(i));
        this.table[i].recorrerLista();
      }
    }
    return;
  }

  draw() {
    let temporal, cadena, cont;
    cont = 0;
    cadena = ""
    cadena += `
digraph G {
  nodesep=.05;
  rankdir=LR;
  node [shape=record,width=.1,height=.1];
  edge[shape=both];\n
`
    cadena += `node0[label = " `
    for (let i = 0; i < this.table.length; i++) { //*Solo para hacer la columna
      if (i != this.table.length - 1) {
        cadena += `<f${i}>${i} |`
      } else {
        cadena += `<f${i}>${i}`
      }
    }
    cadena += "\" , height=2.5];\n";
    cadena += "node[width=1.0];\n";

    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        const [enlace, sub_cadena] = [... this.table[i].graficarDot()];
        cadena += `node0:f${i} -> ${enlace}:l;\n`
        cadena += sub_cadena;

      }
    }
    cadena += "}"
    console.log(cadena)
    d3.select("#lienzo").graphviz().zoom(false).renderDot(cadena);
  }
}

let ht = new HashTable(20);
ht.set("Canada", 300);
ht.set("France", 100);
ht.set("Spain", 110);
ht.set("ǻ", 192);
ht.set("aperos", 150);
ht.set("apreso", 190);
ht.set("aproes", 195);
ht.set("raspeo", 174);
ht.set("espora", 198);
ht.set("repaso", 200);
ht.show();
console.log(ht.remove("repaso")); //*Funciona nice
// console.log("-------------");
// ht.show();
// console.log(ht.get("raspeo"));
// console.log(ht.get("repaso"));
ht.draw();