from Nodo import Nodo
import os
import webbrowser

class listaCircularSimple(object):
    def __init__(self):
        self.primero = None
        self.ultimo = None

    def estaVacia(self):
        return self.primero is None

    def agregarAlinicio(self, dato):
        if self.estaVacia():
            self.primero = self.ultimo = Nodo(dato)
            self.ultimo.siguiente = self.primero
        else:
            auxiliar = Nodo(dato)
            auxiliar.siguiente = self.primero
            self.primero = auxiliar
            self.ultimo.siguiente = self.primero

    def agregarAlfinal(self, dato):
        if self.estaVacia():
            self.primero = self.ultimo = Nodo(dato)
            self.ultimo.siguiente = self.primero
        else:
            auxiliar = self.ultimo
            self.ultimo = auxiliar.siguiente = Nodo(dato)
            self.ultimo.siguiente = self.primero
    
    def eliminarAlinicio(self):
        if self.estaVacia():
            print("No se encontraron datos en la lista")
        elif self.primero == self.ultimo:
            self.primero = self.ultimo = None
        else:
            self.primero = self.primero.siguiente
            self.ultimo.siguiente = self.primero

    def eliminarAlfinal(self):
        if self.estaVacia():
            print("No se encontraron datos")
        elif self.primero == self.ultimo:
            self.primero = self.ultimo = None
        else:
            auxiliar = self.primero
            while auxiliar.siguiente != self.ultimo:
                auxiliar = auxiliar.siguiente
            auxiliar.siguiente = self.primero
            self.ultimo = auxiliar

    def recorrerLista(self):
        if self.estaVacia():
            print("No se encontraron datos")
        auxiliar = self.primero
        while auxiliar != None:
            print(auxiliar.dato.toString())
            auxiliar = auxiliar.siguiente
            if auxiliar == self.primero:
                break
        print("\n")
        
    def buscarDato(self, dato_):
        if self.estaVacia():
            print("No se encontraron datos")
        auxiliar = self.primero
        while auxiliar != None:
            if auxiliar.dato.nombreSong == dato_:
                return ((auxiliar.dato) + ", dato encontrado.")
            auxiliar = auxiliar.siguiente
            if auxiliar == self.primero:
                return ((dato_) + ", dato no encontrado.")

    def tamanio(self):
        contador = 0
        if self.estaVacia():
            return 0
        auxiliar = self.primero
        while auxiliar != None:
            contador += 1
            auxiliar = auxiliar.siguiente
            if auxiliar == self.primero:
                print(contador)

    def ordenamientoBurbuja(self):
        auxiliar = None
        actual = auxiliar = None
        if not self.estaVacia():
            actual = self.primero
            while actual.siguiente != self.primero:
                auxiliar = actual.siguiente
                while auxiliar != self.primero:
                    if auxiliar.dato.tiempoSong < actual.dato.tiempoSong:
                        temporal = actual.dato
                        actual.dato = auxiliar.dato
                        auxiliar.dato = temporal
                    auxiliar = auxiliar.siguiente
                actual = actual.siguiente
        else:
            print("No se encontraron elementos")

    def graficarDot(self):
        MAXVALUE = 1
        aux = self.primero
        cont = 0
        cont_aux = 0
        cadena = ""
        cadena += "digraph G { \n"
        cadena += "rankdir=LR \n"

        while aux:
            cadena += "Node" + str(cont) + '[label="' + str(aux.dato.nombreSong) + '"];\n'
            cont += 1
            aux = aux.siguiente
            if aux == self.primero:
                cont_aux += 1
                if cont_aux == MAXVALUE: break
        cont = cont_aux = 0
        while aux:
            cadena += "Node" + str(cont) + " -> " + "Node" + str(cont + 1) + ";\n"
            cont += 1
            aux = aux.siguiente
            if aux == self.ultimo:
                cont_aux += 1
                if cont_aux == MAXVALUE: break
        cadena += "Node" + str(cont) + " -> " + "Node" + str(0) + ";\n"
        cadena += "}"
        #print(cadena)
        
        dot = "Lineal_structure\PY\Lista_circular_simple\LinkedListCircular_Dot.txt"
        with open(dot, 'w') as grafo:
            grafo.write(cadena)
        result = "Lineal_structure\PY\Lista_circular_simple\LinkedListCircular_Graph.png"
        os.system("dot -Tpng " + dot + " -o " + result)
        webbrowser.open(result)
        