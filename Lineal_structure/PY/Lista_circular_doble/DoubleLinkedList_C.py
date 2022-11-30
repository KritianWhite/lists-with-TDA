from Nodo import Nodo
import os
import webbrowser


class listaCircularDoble:
    def __init__(self):
        self.primero = None
        self.ultimo = None

    def estaVacia(self):
        if self.primero == None:
            return True
        else:
            return False

    def unirNodos(self):
        if self.primero != None:
            self.primero.anterior = self.ultimo
            self.ultimo.siguiente = self.primero

    def agregarAlinicio(self, dato):
        if self.estaVacia():
            self.primero = self.ultimo = Nodo(dato)
        else:
            auxiliar = Nodo(dato)
            auxiliar.siguiente = self.primero
            self.primero.anterior = auxiliar
            self.primero = auxiliar
        self.unirNodos()

    def agregarAlfinal(self, dato):
        if self.estaVacia():
            self.primero = self.ultimo = Nodo(dato)
        else:
            auxiliar = self.ultimo
            self.ultimo = auxiliar.siguiente = Nodo(dato)
            self.ultimo.anterior = auxiliar
        self.unirNodos()

    def eliminarAlinicio(self):
        if self.estaVacia():
            print("No se encontraron elementos")
        elif self.primero == self.ultimo:
            self.primero = self.ultimo = None
        else:
            self.primero = self.primero.siguiente
        self.unirNodos()

    def eliminarAlfinal(self):
        if self.estaVacia():
            print("No se encontraron datos")
        elif self.primero == self.ultimo:
            self.primero = self.ultimo = None
        else:
            self.ultimo = self.ultimo.anterior
        self.unirNodos()

    def buscar(self, _dato):
        auxiliar = self.primero
        while auxiliar:
            if auxiliar.dato.nombreCancion == _dato:
                return str(auxiliar.dato.nombreCancion) + ", dato encontrado."
            else:
                auxiliar = auxiliar.siguiente
                if auxiliar == self.primero:
                    return str(_dato) + ", dato no encontrado"

    def recorrerIniocio_Fin(self):
        auxiliar = self.primero
        while auxiliar:
            print(auxiliar.dato.toString())
            auxiliar = auxiliar.siguiente
            if auxiliar == self.primero:
                break
    def recorrerFin_Inicio(self):
        auxiliar = self.ultimo
        while auxiliar:
            print(auxiliar.dato.toString())
            auxiliar = auxiliar.anterior
            if auxiliar == self.ultimo:
                break

    def ordenamientoBurbuja(self):
        auxiliar = actual = None
        if not self.estaVacia():
            actual = self.primero
            while actual.siguiente != self.primero:
                auxiliar = actual.siguiente
                while auxiliar != self.primero:
                    if auxiliar.dato.tiempoCancion < actual.dato.tiempoCancion:
                        temporal = actual.dato
                        actual.dato = auxiliar.dato
                        auxiliar.dato = temporal
                    auxiliar = auxiliar.siguiente
                actual = actual.siguiente
        else:
            print("No se encontraron datos")

    def graficarDobleDot(self):
        MAXVALUE = 1
        aux = self.primero
        cont = 0
        cont_aux = 0
        cadena = ""
        cadena += "digraph G { \n"
        cadena += "rankdir=LR \n"

        while aux:
            cadena += "Node" + str(cont) + '[label="' + str(aux.dato.tiempoCancion) + '"];\n'
            cont += 1
            aux = aux.siguiente
            if aux == self.primero:
                cont_aux += 1
                if cont_aux == MAXVALUE:
                    break

        cont = cont_aux = 0
        while aux:
            cadena += "Node" + str(cont) + " -> " + "Node" + str(cont + 1) + ";\n"
            cadena += "Node" + str(cont + 1) + " -> " + "Node" + str(cont) + ";\n"
            cont += 1
            aux = aux.siguiente
            if aux == self.ultimo:
                cont_aux += 1
                if cont_aux == MAXVALUE:
                    break

        cadena += "Node" + str(cont) + " -> " + "Node" + str(0) + ";\n"
        cadena += "}"
        #print(cadena)
        
        dot = "Lineal_structure\PY\Lista_circular_doble\DoubleLinkedListCircular_Dot.txt"
        with open(dot, 'w') as grafo:
            grafo.write(cadena)
        result = "Lineal_structure\PY\Lista_circular_doble\DoubleLinkedListCircular_Graph.png"
        os.system("dot -Tpng "+ dot + " -o " + result)
        webbrowser.open(result)
    