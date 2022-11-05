import os
from Nodo import Nodo

class AVL():

    def __init__(self):
        self.root = None

    def insertar(self, dato, valor):
        self.root = self._insert(self.root, dato, valor)

    def buscar(self, indice):
        return self._buscar(self.root, indice)

    def print(self):
        self._recorridoInOrden(self.root)

    def _MAX(self, val1, val2):
        if(val1 > val2):
            return val1
        return val2

    def _getAltura(self, temp):
        if(temp != None):
            return temp.altura
        return -1

    def _rotacionIzquierda(self, pivote):
        aux = pivote.izq
        pivote.izq = aux.der
        aux.der = pivote
        pivote.altura = self._MAX(self._getAltura(
            pivote.izq), self._getAltura(pivote.der)) + 1
        aux.altura = self._MAX(self._getAltura(aux.izq), pivote.altura) + 1
        return aux

    def _rotacionDerecha(self, pivote):
        aux = pivote.der
        pivote.der = aux.izq
        aux.izq = pivote
        pivote.altura = self._MAX(self._getAltura(
            pivote.der), self._getAltura(pivote.izq)) + 1
        aux.altura = self._MAX(self._getAltura(aux.der), pivote.altura) + 1
        return aux

    def _rotacionDobleIzquierda(self, pivote):
        pivote.izq = self._rotacionDerecha(pivote.izq)
        return self._rotacionIzquierda(pivote)

    def _rotacionDobleDerecha(self, pivote):
        pivote.der = self._rotacionIzquierda(pivote.der)
        return self._rotacionDerecha(pivote)

    def _insert(self, root, dato, valor):
        if(root == None):
            root = Nodo(dato, valor)
        elif (dato < root.dato):
            root.izq = self._insert(root.izq, dato, valor)
            if((self._getAltura(root.der) - self._getAltura(root.izq)) == -2):
                if(dato < root.izq.dato):
                    root = self._rotacionIzquierda(root)
                else:
                    root = self._rotacionDobleIzquierda(root)
        elif (dato > root.dato):
            root.der = self._insert(root.der, dato, valor)
            if((self._getAltura(root.der) - self._getAltura(root.izq)) == 2):
                if(dato > root.der.dato):
                    root = self._rotacionDerecha(root)
                else:
                    root = self._rotacionDobleDerecha(root)
        root.altura = self._MAX(self._getAltura(root.izq),
                                self._getAltura(root.der)) + 1
        return root

    def _buscar(self, pivote, indice):
        if(pivote != None):
            if(pivote.dato == indice):
                return True
            if(pivote.izq != None):
                return self._buscar(pivote.izq, indice)
            else:
                return self._buscar(pivote.der, indice)
        return False

    def _recorridoInOrden(self, pivote):
        if(pivote != None):
            self._recorridoInOrden(pivote.izq)
            print(str(pivote.dato), pivote.valor, end=" ")
            self._recorridoInOrden(pivote.der)
        return

    def graficar(self, raiz):
        file = open("Arbol.dot", 'w', encoding='utf-8')
        file.write("digraph G { \n")
        file.write("rankdir=TB; \n")
        file.write(
            "node [shape = record, color=black , style=filled, fillcolor=gray93];\n")
        file.write(self.__graficadora(raiz))
        file.write("} \n")
        file.close()
        os.system("dot -Tpng Arbol.dot -o Arbol.png")
        os.startfile("Arbol.png")

    def __graficadora(self, root):
        cadena = ""
        if(root.der == None) and (root.izq == None):
            cadena = "nodo" + \
                str(root.dato)+"[label =\" " + \
                str(root.dato) + " " + root.valor + "\"]; \n"
        else:
            cadena = "nodo"+str(root.dato) + \
                "[label =\"<C0>| "+str(root.dato) + \
                " " + root.valor + "|<C1> \"]; \n"

        if(root.izq != None):
            cadena = cadena + self.__graficadora(root.izq)+"nodo"+str(
                root.dato)+":C0->nodo"+str(root.izq.dato)+"\n"
        if(root.der != None):
            cadena = cadena + self.__graficadora(root.der)+"nodo"+str(
                root.dato)+":C1->nodo"+str(root.der.dato)+"\n"

        return cadena
