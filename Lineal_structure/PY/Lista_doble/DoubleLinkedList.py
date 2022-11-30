from Nodo import Nodo
import os, webbrowser

class listaDoble:

    def __init__(self):
        self.primero = None
        self.ultimo = None
        self.size = 0

    def estaVacia(self):
        return self.primero == None

    def tamanio(self):
        return self.size

    def agregarAlinicio(self, dato):
        if self.estaVacia():
            self.primero = self.ultimo = Nodo(dato)
        else:
            auxiliar = Nodo(dato)
            auxiliar.siguiente = self.primero
            self.primero.anterior = auxiliar
            self.primero = auxiliar
        self.size += 1

    def agregarAlfinal(self, dato):
        if self.estaVacia():
            self.primero = self.ultimo = Nodo(dato)
        else:
            auxiliar = self.ultimo
            self.ultimo = auxiliar.siguiente = Nodo(dato)
            self.ultimo.anterior = auxiliar
        self.size += 1

    def eliminarAlinicio(self):
        if self.estaVacia():
            print("Lista vacia")
        elif self.primero.siguiente == None:
            self.primero = self.ultimo = None
            self.size = 0
        else:
            self.primero = self.primero.siguiente
            self.primero.anterior = None
            self.size -= 1

    def eliminarAlfinal(self):
        if self.estaVacia():
            print("Lista vacia")
        elif self.primero.siguiente == None:
            self.primero = self.ultimo = None
            self.size = 0
        else:
            self.ultimo = self.ultimo.anterior
            self.ultimo.siguiente = None
            self.size -= 1
            
    def recorrerLista(self):
        if self.estaVacia():
            print("No hay elementos en la lista")
        auxiliar = self.primero
        while (auxiliar != None):
            print((auxiliar.dato.toString()))
            auxiliar = auxiliar.siguiente
        print("\n")

    def buscarDato(self,dato_):
        if (self.primero == None):
            print("No se encontraron elementos en la lista")
        auxiliar = self.primero
        while (auxiliar != None):
            if (auxiliar.dato.nombre == dato_):
                print(auxiliar.dato.toString()+ ", dato encontrado")
            auxiliar = auxiliar.siguiente
        return dato_ + ", dato no encontrado"

    def ordenamientoBurbuja(self):
        auxiliar = None
        actual = auxiliar = None
        if not self.estaVacia():
            actual = self.primero
            while actual.siguiente:
                auxiliar = actual.siguiente
                while auxiliar:
                    if (str(auxiliar.dato.nombre) < str(actual.dato.nombre)):
                        temporal = actual.dato
                        actual.dato = auxiliar.dato
                        auxiliar.dato = temporal
                    auxiliar = auxiliar.siguiente
                actual = actual.siguiente
        else:
            print("No se encontraron elementos")

    def graficarDobleDot(self):
        temporal = self.primero
        cont = 0
        cadena = ""
        cadena += "digraph G { \n"
        cadena += "rankdir=LR \n"
        
        while (temporal != None):

            cadena += "Node" + str(cont) + "[label=\"" + str(temporal.dato.nombre) + " \n" + str(temporal.dato.apellido) + "\"];\n"

            if (temporal != self.primero):
                cadena += "Node" + str(cont - 1) + " -> " + "Node" + str(cont) + ";\n"
                cadena += "Node" + str(cont) + " -> " + "Node" + str(cont -1) + ";\n"

            temporal = temporal.siguiente
            cont += 1

        cadena += "}"
        #print(cadena)
        dot = "Lineal_structure\PY\Lista_doble\DoubleLinkedList_Dot.txt"
        with open(dot, 'w') as grafo:
            grafo.write(cadena)
        result = "Lineal_structure\PY\Lista_doble\DoubleLinkedList_Graph.png"
        os.system("dot -Tpng " + dot + " -o " + result)
        webbrowser.open(result)