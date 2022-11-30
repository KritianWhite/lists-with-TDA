from Nodo import Nodo
import os, webbrowser

class listaSimple:
    def __init__(self):
        self.primero = None
        self.ultimo = None

    def estavacia(self):
        return self.primero is None

    def agregarAlinicio(self, dato):
        if self.estavacia():
            self.primero = self.ultimo = Nodo(dato)
        else:
            auxiliar = Nodo(dato)
            auxiliar.siguiente = self.primero
            self.primero = auxiliar

    def agregarAlfinal(self, dato):
        if self.estavacia():
            self.primero = self.ultimo = Nodo(dato)
        else:
            auxiliar = self.ultimo
            self.ultimo = Nodo(dato)
            auxiliar.siguiente = self.ultimo

    def eliminarAlinicio(self):
        if self.estavacia():
            print("Lista vacia")
        elif self.primero == self.ultimo:
            self.primero = self.ultimo = None
        else:
            self.primero = self.primero.siguiente

    def eliminarAlfinal(self):
        if self.estavacia():
            print("Lista vacia")
        elif self.primero == self.ultimo:
            self.primero = self.ultimo = None
        else:
            auxiliar = self.primero
            while auxiliar.siguiente != self.ultimo:
                auxiliar = auxiliar.siguiente
            auxiliar.siguiente = None

    def recorrerLista(self):
        if self.estavacia():
            print("La lista esta vacia")
        auxiliar = self.primero
        while auxiliar is not None:
            print(auxiliar.dato.toString())
            auxiliar = auxiliar.siguiente
        print("\n")
        
    def tamanio(self):
        contador = 0
        if self.estavacia():
            return 0
        auxiliar = self.primero
        while auxiliar != None:
            contador += 1
            auxiliar = auxiliar.siguiente
        print("Número de elementos de la lista: " + contador)
        return contador

    def buscarDato(self, dato_):
        if self.estavacia():
            print("No hay elementos")
        auxiliar = self.primero
        while auxiliar != None:
            if auxiliar.dato.nombre == dato_:
                print(str(auxiliar.dato.nombre) + ", nombre encontrado.")
            auxiliar = auxiliar.siguiente
        return dato_ + ", dato no encontrado"

    def ordenamientoBurbuja(self):
        auxiliar = None
        actual = auxiliar = None
        if not self.estavacia():
            actual = self.primero
            while actual.siguiente:
                auxiliar = actual.siguiente
                while auxiliar:
                    if auxiliar.dato.nombre < actual.dato.nombre:
                        temporal = actual.dato
                        actual.dato = auxiliar.dato
                        auxiliar.dato = temporal
                    auxiliar = auxiliar.siguiente
                actual = actual.siguiente
        else:
            print("No se encontraron elementos")

    def graficar(self):
        temporal = self.primero
        cadena = ""
        cont = 0
        cadena += "digraph G { \n"
        cadena += "rankdir=LR \n"

        while temporal != None:
            cadena += "Node" + str(cont) + "[label=\"" + str(temporal.dato.nombre) + " \n" + str(temporal.dato.apellido) + "\"];\n"

            if temporal != self.primero:
                cadena += "Node" + str(cont - 1) + " -> " + "Node" + str(cont) + ";\n"

            temporal = temporal.siguiente
            cont += 1
        cadena += "}"
        #print(cadena)
        dot = "Lineal_structure\PY\Lista_simple\LinkedList_Dot.txt"
        with open(dot, 'w') as grafo:
            grafo.write(cadena)
        result = "Lineal_structure\PY\Lista_simple\LinkedList_Graph.png"
        os.system("dot -Tpng " + dot + " -o " + result)
        webbrowser.open(result)