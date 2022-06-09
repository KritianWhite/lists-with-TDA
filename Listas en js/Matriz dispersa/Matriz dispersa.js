var matriz;

class NodoCelda {
    constructor(x, y, caracter) {
        this.caracter = caracter;
        this.coordenadaX = x;
        this.coordenadaY = y;
        this.arriba = null;
        this.abajo = null;
        this.derecha = null;
        this.izquierda = null;
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

    setDerecha(derecha) {
        this.derecha = derecha;
    }

    getDerecha() {
        return this.derecha;
    }

    setIzquierda(izquierda) {
        this.izquierda = izquierda;
    }

    getIzquierda() {
        return this.izquierda;
    }

}

class NodoCabecera {
    constructor(id) {
        this.id = id;
        this.siguiente = null;
        this.anterior = null;
        this.acceso = null;
    }

    getAcceso() {
        return this.acceso;
    }

    setAcceso(nuevo_acceso) {
        this.acceso = nuevo_acceso;
    }

}

class ListaCabecera {
    constructor(tipo) {
        this.primero = null;
        this.ultimo = null;
        this.tipo = tipo;
        this.size = 0;
    }

    getHead() {
        return this.primero;
    }

    isEmpty() {
        return this.primero === null;
    }

    insertar_nodoCabecera(nuevo) {
        var tmp;
        this.size += 1;

        if (this.primero === null) {
            this.primero = nuevo;
            this.ultimo = nuevo;
        } else {
            if (nuevo.id < this.primero.id) {
                nuevo.siguiente = this.primero;
                this.primero.anterior = nuevo;
                this.primero = nuevo;
            } else {
                if (nuevo.id > this.ultimo.id) {
                    this.ultimo.siguiente = nuevo;
                    nuevo.anterior = this.ultimo;
                    this.ultimo = nuevo;
                } else {
                    tmp = this.primero;

                    while (tmp !== null) {
                        if (nuevo.id < tmp.id) {
                            nuevo.siguiente = tmp;
                            nuevo.anterior = tmp.anterior;
                            tmp.anterior.siguiente = nuevo;
                            tmp.anterior = nuevo;
                            break;
                        } else {
                            if (nuevo.id > tmp.id) {
                                tmp = tmp.siguiente;
                            } else {
                                break;
                            }
                        }
                    }
                }
            }
        }
    }

    mostrarCabeceras() {
        var tmp;
        tmp = this.primero;

        while (tmp !== null) {
            console.log("Cabecera", this.tipo, tmp.id);
            tmp = tmp.siguiente;
        }
    }

    getCabecera(id) {
        var tmp;
        tmp = this.primero;

        while (tmp !== null) {
            if (id === tmp.id) {
                return tmp;
            }

            tmp = tmp.siguiente;
        }

        return null;
    }

}

class MatrizDispersa {
    constructor() {
        this.filas = new ListaCabecera("fila");
        this.columnas = new ListaCabecera("columna");
    }

    insertar(pos_x, pos_y, caracter) {
        var nodo_X, nodo_Y, nueva_celda, tmp, tmp2;
        nueva_celda = new NodoCelda(pos_x, pos_y, caracter);
        nodo_X = this.filas.getCabecera(pos_x);
        nodo_Y = this.columnas.getCabecera(pos_y);

        if (nodo_X === null) {
            nodo_X = new NodoCabecera(pos_x);
            this.filas.insertar_nodoCabecera(nodo_X);
        }

        if (nodo_Y === null) {
            nodo_Y = new NodoCabecera(pos_y);
            this.columnas.insertar_nodoCabecera(nodo_Y);
        }

        if (nodo_X.getAcceso() === null) {
            nodo_X.setAcceso(nueva_celda);
        } else {
            if (nueva_celda.coordenadaY < nodo_X.getAcceso().coordenadaY) {
                nueva_celda.setDerecha(nodo_X.getAcceso());
                nodo_X.getAcceso().setIzquierda(nueva_celda);
                nodo_X.setAcceso(nueva_celda);
            } else {
                tmp = nodo_X.getAcceso();

                while (tmp !== null) {
                    if (nueva_celda.coordenadaY < tmp.coordenadaY) {
                        nueva_celda.setDerecha(tmp);
                        nueva_celda.setIzquierda(tmp.getIzquierda());
                        tmp.getIzquierda().setDerecha(nueva_celda);
                        tmp.setIzquierda(nueva_celda);
                        break;
                    } else {
                        if (nueva_celda.coordenadaX === tmp.coordenadaX && nueva_celda.coordenadaY === tmp.coordenadaY) {
                            break;
                        } else {
                            if (tmp.getDerecha() === null) {
                                tmp.setDerecha(nueva_celda);
                                nueva_celda.setIzquierda(tmp);
                                break;
                            } else {
                                tmp = tmp.getDerecha();
                            }
                        }
                    }
                }
            }
        }

        if (nodo_Y.getAcceso() === null) {
            nodo_Y.setAcceso(nueva_celda);
        } else {
            if (nueva_celda.coordenadaX < nodo_Y.getAcceso().coordenadaX) {
                nueva_celda.setAbajo(nodo_Y.getAcceso());
                nodo_Y.getAcceso().setArriba(nueva_celda);
                nodo_Y.setAcceso(nueva_celda);
            } else {
                tmp2 = nodo_Y.getAcceso();

                while (tmp2 !== null) {
                    if (nueva_celda.coordenadaX < tmp2.coordenadaX) {
                        nueva_celda.setAbajo(tmp2);
                        nueva_celda.setArriba(tmp2.getArriba());
                        tmp2.getArriba().setAbajo(nueva_celda);
                        tmp2.setArriba(nueva_celda);
                        break;
                    } else {
                        if (nueva_celda.coordenadaX === tmp2.coordenadaX && nueva_celda.coordenadaY === tmp2.coordenadaY) {
                            break;
                        } else {
                            if (tmp2.getAbajo() === null) {
                                tmp2.setAbajo(nueva_celda);
                                nueva_celda.setArriba(tmp2);
                                break;
                            } else {
                                tmp2 = tmp2.getAbajo();
                            }
                        }
                    }
                }
            }
        }
    }

    recorridoPorFila(fila) {
        var inicio, tmp;
        inicio = this.filas.getCabecera(fila);

        if (inicio === null) {
            console.log("Esa coordenada de filas no existe");
            return;
        }

        tmp = inicio.getAcceso();
        console.log(`Fila : ${fila}`);
        console.log();

        while (tmp !== null) {
            console.log(tmp.caracter);
            tmp = tmp.getDerecha();
        }

        console.log("");
    }

    recorridoPorColumna(columna) {
        var inicio, tmp;
        inicio = this.columnas.getCabecera(columna);

        if (inicio === null) {
            console.log("Esa coordenada de columna no existe");
            return;
        }

        tmp = inicio.getAcceso();

        while (tmp !== null) {
            console.log(tmp.caracter);
            tmp = tmp.getAbajo();
        }
    }

    ubicarCoordenada(fila, columna) {
        var tmp;

        try {
            tmp = this.filas.getCabecera(fila).getAcceso();

            while (tmp !== null) {
                if (tmp.coordenadaX === fila && tmp.coordenadaY === columna) {
                    return tmp;
                }

                tmp = tmp.getDerecha();
            }

            return null;
        } catch (e) {
            console.log("Coordenada no encontrada");
            return null;
        }
    }

    printMatrixO() {
        var aux, inicio, tmp;
        aux = tmp = null;
        inicio = this.filas.getHead();

        if (inicio !== null) {
            tmp = inicio.getAcceso();

            while (tmp !== null) {
                aux = tmp;

                while (aux !== null) {
                    console.log(aux.caracter + " ");
                    aux = aux.getDerecha();
                }

                console.log("");
                tmp = tmp.getAbajo();
            }
        } else {
            return console.log("Matriz Vacia");
        }
    }


}

matriz = new MatrizDispersa();
matriz.insertar(1, 1, "h");
matriz.insertar(1, 2, "*");
matriz.insertar(1, 3, "*");
matriz.insertar(1, 4, "*");
matriz.insertar(2, 1, "*");
matriz.insertar(2, 2, "o");
matriz.insertar(2, 3, "*");
matriz.insertar(2, 4, "*");
matriz.insertar(3, 1, "*");
matriz.insertar(3, 2, "*");
matriz.insertar(3, 3, "l");
matriz.insertar(3, 4, "*");
matriz.insertar(4, 1, "*");
matriz.insertar(4, 2, "*");
matriz.insertar(4, 3, "*");
matriz.insertar(4, 4, "a");
matriz.insertar(4, 5, "*");
matriz.insertar(4, 6, "*");
matriz.insertar(15, 1, "*");
matriz.insertar(15, 2, "*");
matriz.insertar(15, 3, "*");
matriz.insertar(15, 4, "*");
matriz.insertar(15, 5, "*");
matriz.printMatrixO();
