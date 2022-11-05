import os
from NodoArbol import NodoArbol


class ArbolBinario():
    def __init__(self):
        self.raiz = None

    # * Metodo para insertar un nodo en el arbol
    def agregarNodo(self, d,  nom):
        nuevo = NodoArbol(d, nom)
        if (self.raiz == None):
            self.raiz = nuevo
        else:
            auxiliar = self.raiz
            padre = None
            while (True):
                padre = auxiliar
                if (d < auxiliar.dato):
                    # * Se inserta a la izquierda
                    auxiliar = auxiliar.hijoIzquierdo
                    if (auxiliar == None):
                        padre.hijoIzquierdo = nuevo
                        return
                else:
                    auxiliar = auxiliar.hijoDerecho
                    if (auxiliar == None):
                        padre.hijoDerecho = nuevo
                        return

    # * Metodo para saber cuando el arbol esta vacio
    def estaVacio(self):
        return self.raiz == None

    # * Metodo para recorrer el arbol InOrden
    def inOrden(self, r):
        if (r != None):
            self.inOrden(r.hijoIzquierdo)
            print(str(r.dato) + " - " + r.nombre + " | ", end="")
            self.inOrden(r.hijoDerecho)

    # * Metodo para recorrer el arbol PreOrden
    def preOrden(self, r):
        if (r != None):
            print(str(r.dato) + " - " + r.nombre + " | ", end="")
            self.preOrden(r.hijoIzquierdo)
            self.preOrden(r.hijoDerecho)

    # * Metodo para recorrer el arbol PostOrden
    def postOrden(self, r):
        if (r != None):
            self.postOrden(r.hijoIzquierdo)
            self.postOrden(r.hijoDerecho)
            print(str(r.dato) + " - " + r.nombre + " | ", end="")

    # * Metodo para buscar un nodo en el arbol
    def buscarNodo(self, d):
        aux = self.raiz

        if(aux == None):
            return None

        while (aux.dato != d):
            if (d < aux.dato):
                aux = aux.hijoIzquierdo
            else:
                aux = aux.hijoDerecho
            if (aux == None):
                return None
        return aux

    # * Metodo para eliminar un nodo del arbol
    def eliminar(self, d):
        auxiliar = self.raiz
        padre = self.raiz
        esHijoIzq = True
        while (auxiliar.dato != d):
            padre = auxiliar
            if (d < auxiliar.dato):
                esHijoIzq = True
                auxiliar = auxiliar.hijoIzquierdo
            else:
                esHijoIzq = False
                auxiliar = auxiliar.hijoDerecho
            if (auxiliar == None):
                return False
        # * Fin del while
        if (auxiliar.hijoIzquierdo == None and auxiliar.hijoDerecho == None):
            if (auxiliar == self.raiz):
                self.raiz = None
            elif(esHijoIzq):
                padre.hijoIzquierdo = None
            else:
                padre.hijoDerecho = None
        elif(auxiliar.hijoDerecho == None):
            if (auxiliar == self.raiz):
                self.raiz = auxiliar.hijoIzquierdo
            elif(esHijoIzq):
                padre.hijoIzquierdo = auxiliar.hijoIzquierdo
            else:
                padre.hijoDerecho = auxiliar.hijoIzquierdo
        elif(auxiliar.hijoIzquierdo == None):
            if (auxiliar == self.raiz):
                self.raiz = auxiliar.hijoDerecho
            elif(esHijoIzq):
                padre.hijoIzquierdo = auxiliar.hijoDerecho
            else:
                padre.hijoDerecho = auxiliar.hijoIzquierdo
        else:
            reemplazo = self.__obtenerNodoReemplazo(auxiliar)
            if (auxiliar == self.raiz):
                self.raiz = reemplazo
            elif(esHijoIzq):
                padre.hijoIzquierdo = reemplazo
            else:
                padre.hijoDerecho = reemplazo
            reemplazo.hijoIzquierdo = auxiliar.hijoIzquierdo
        return True

    # * Metodo encargado de devolvernos el nodo reemplazo
    def __obtenerNodoReemplazo(self, nodoReemp):
        reemplazarPadre = nodoReemp
        reemplazo = nodoReemp
        auxiliar = nodoReemp.hijoDerecho
        while (auxiliar != None):
            reemplazarPadre = reemplazo
            reemplazo = auxiliar
            auxiliar = auxiliar.hijoIzquierdo
        if (reemplazo != nodoReemp.hijoDerecho):
            reemplazarPadre.hijoIzquierdo = reemplazo.hijoDerecho
            reemplazo.hijoDerecho = nodoReemp.hijoDerecho
        print("El nodo reemplazo es: " + str(reemplazo.toString()))
        return reemplazo

    def sPreOrden(self, r):
        cadena = ""
        cadena += self.__preOrden2(r)
        return cadena

    def __preOrden2(self, r):
        cadena = ""
        if (r != None):
            #cadena = ""
            cadena += str(r.dato) + " - " + r.nombre + " | "

            if(r.hijoIzquierdo != None):
                cadena += self.__preOrden2(r.hijoIzquierdo)

            if(r.hijoDerecho != None):
                cadena += self.__preOrden2(r.hijoDerecho)
        
            return cadena

    def sInOrden(self, r):
        cadena = ""
        cadena += self.__inOrden2(r)
        return cadena

    def __inOrden2(self, r):
        cadena = ""
        if (r != None):
            #cadena = ""
            if(r.hijoIzquierdo != None):
                cadena += self.__inOrden2(r.hijoIzquierdo)

            cadena += str(r.dato) + " - " + r.nombre + " | "

            if(r.hijoDerecho != None):
                cadena += self.__inOrden2(r.hijoDerecho)

            return cadena
    
    def sPostOrden(self, r):
        cadena = ""
        cadena += self.__postOrden2(r)
        return cadena

    def __postOrden2(self, r):
        cadena = ""
        if (r != None):
            #cadena = ""
            if(r.hijoIzquierdo != None):
                cadena += self.__postOrden2(r.hijoIzquierdo)

            if(r.hijoDerecho != None):
                cadena += self.__postOrden2(r.hijoDerecho)

            cadena += str(r.dato) + " - " + r.nombre + " | "

            return cadena

    def graficar(self, raiz):
        file = open("Arbol.dot", 'w')
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
        if(root.hijoDerecho == None) and (root.hijoIzquierdo == None):
            cadena = "nodo" + \
                str(root.dato)+"[label =\""+str(root.dato) + \
                ", " + (root.nombre) + "\"]; \n"
        else:
            cadena = "nodo" + \
                str(root.dato)+"[label =\"<C0>| "+str(root.dato) + \
                ", " + (root.nombre) + " |<C1> \"]; \n"

        if(root.hijoIzquierdo != None):
            cadena = cadena + self.__graficadora(root.hijoIzquierdo)+"nodo"+str(
                root.dato)+":C0->nodo"+str(root.hijoIzquierdo.dato)+"\n"
        if(root.hijoDerecho != None):
            cadena = cadena + self.__graficadora(root.hijoDerecho)+"nodo"+str(
                root.dato)+":C1->nodo"+str(root.hijoDerecho.dato)+"\n"

        return cadena
