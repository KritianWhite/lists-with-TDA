from Nodo import Nodo
import os, webbrowser

class Pila:
    def __init__(self):
        self.cima = None
        self.tamanio = 0

    def getTamanio(self):
        return self.tamanio

    def esVacio(self):
        return self.cima == None

    def Cima(self):
        if self.cima != None:
            return self.cima.dato
        else:
            return None

    def apilar(self, dato):
        nuevo_nodo = None
        self.tamanio += 1
        nuevo_nodo = Nodo(dato)

        if self.esVacio():
            self.cima = nuevo_nodo
        else:
            nuevo_nodo.siguiente = self.cima
            self.cima = nuevo_nodo

    def desapilar(self):
        nodo_a_retirar = None

        if not self.esVacio():
            nodo_a_retirar = self.cima
            self.cima = self.cima.siguiente
            self.tamanio -= 1

        return nodo_a_retirar

    def listar(self):
        aux = self.cima

        if self.esVacio():
            return print("La pila esta vacia")

        print("-----------------")

        while aux != None:
            print("|\t" + aux.dato.__str__() + "\t|")
            print("-----------------")
            aux = aux.siguiente

    def graficarDot(self):
        temporal = self.cima
        cadena = ""
        nodo = ""

        while temporal != None:
            nodo += temporal.dato.__str__() + " | "
            temporal = temporal.siguiente

        cadena += f"digraph G {{\nlabel = \"Pila\" \n rankdir=LR;nodo1 [label=\"{nodo}\" shape = \"record\" ];\n}}"
        #print(cadena)
        dot = "Lineal_structure\PY\Pila\Pila_Dot.txt"
        with open(dot, 'w') as grafo:
            grafo.write(cadena)
        result = "Lineal_structure\PY\Pila\Pila_Graph.png"
        os.system("dot -Tpng " + dot + " -o " + result)
        webbrowser.open(result)