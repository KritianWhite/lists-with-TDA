from NodoEncabezado import NodoEncabezado

class ListaEncabezado:

    def __init__(self, tipo = None):
        self.tipo = tipo
        self.primero = None
        self.ultimo = None
        self.size = 0

    def insertarEncabezado(self, nuevo):
        self.size += 1

        if self.primero is None:
            self.primero = nuevo
            self.ultimo = nuevo
        else:
            if nuevo.id < self.primero.id:
                nuevo.siguiente = self.primero
                self.primero.anterior = nuevo
                self.primero = nuevo
            else:
                if nuevo.id > self.ultimo.id:
                    self.ultimo.siguiente = nuevo
                    nuevo.anterior = self.ultimo
                    self.ultimo = nuevo
                else:
                    aux = self.primero

                    while aux is not None:
                        if nuevo.id < aux.id:
                            nuevo.siguiente = aux
                            nuevo.anterior = aux.anterior
                            aux.anterior.siguiente = nuevo
                            aux.anterior = nuevo
                            break
                        else:
                            if nuevo.id > aux.id:
                                aux = aux.siguiente
                            else:
                                break

    def mostrarEncabezado(self):
        aux = self.primero

        while aux is not None:
            print("Encabezado ", self.tipo, aux.id)
            aux = aux.siguiente

    def getEncabezado(self, id):
        aux = self.primero

        while aux is not None:
            if id == aux.id:
                return aux

            aux = aux.siguiente

        return None