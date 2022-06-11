import os
from Nodo import Nodo

class ArbolABB():
    def __init__(self):
        self.raiz = None
    
    def estaVacio(self):
        return self.raiz == None
    
    def agregar(self, id):
        self.raiz = self.__agregarInterno(id, self.raiz)
    
    def __agregarInterno(self, id, raiz):
        if raiz==None:
            return Nodo(id)
        else:
            if id< raiz.id:
                raiz.izquierda = self.__agregarInterno(id, raiz.izquierda)
            elif id>raiz.id:
                raiz.derecha = self.__agregarInterno(id, raiz.derecha)
        return raiz

    def preOrden(self, root):
        self.__preOrdenInterno(root)
    
    def __preOrdenInterno(self, root):
        if root != None:
            print(end="| ")
            self.__preOrdenInterno(root.izquierda)
            print(root.id, end=" | ")
            self.__preOrdenInterno(root.derecha)
    
    def postOrden(self, root):
        self.__postOrdenInterno(root)
    
    def __postOrdenInterno(self, root):
        if root != None:
            print(end="| ")
            self.__postOrdenInterno(root.derecha)
            print(root.id, end=" | ")
            self.__postOrdenInterno(root.izquierda)
    
    def InOrden(self, root):
        self.__inOrdenInterno(root)

    def __inOrdenInterno(self, root):
        if root!=None:
            print(end="| ")
            print(root.id, end=" | ")
            self.__inOrdenInterno(root.derecha)
            self.__inOrdenInterno(root.izquierda)
    
    def graficar(self, raiz):
        file = open("Arbol.dot", 'w')
        file.write("digraph G { \n")
        file.write("rankdir=TB; \n")
        file.write("node [shape = record, color=black , style=filled, fillcolor=gray93];\n")        
        file.write(self.__graficadora(raiz))
        file.write("} \n")
        file.close()
        os.system("dot -Tpng Arbol.dot -o Arbol.png")
        os.startfile("Arbol.png")
    
    def __graficadora(self, root):
        cadena =""
        if(root.derecha == None) and (root.izquierda == None):
            cadena = "nodo"+str(root.id)+"[label =\" "+str(root.id) + "\"]; \n"
        else:
            cadena = "nodo"+str(root.id)+"[label =\"<C0>| "+str(root.id) + "|<C1> \"]; \n"

        if(root.izquierda!=None):
            cadena = cadena + self.__graficadora(root.izquierda)+"nodo"+str(root.id)+":C0->nodo"+str(root.izquierda.id)+"\n"
        if(root.derecha!=None):
            cadena = cadena + self.__graficadora(root.derecha)+"nodo"+str(root.id)+":C1->nodo"+str(root.derecha.id)+"\n"
        
        return cadena