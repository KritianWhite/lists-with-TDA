from NodoOrtogonal import NodoOrtogonal
import os, webbrowser

class MatrizOrtogonal:
    def __init__(self):
        self.head = None
        self.size = 0
        self.SizeG = 0

    def getHead(self):
        return self.head

    def getSize(self):
        return self.size

    def getSizeG(self):
        return self.SizeG

    def vacio(self):
        return self.head == None

    def autofilling(self, fila, columna, caracter):
        for i in range(1, fila + 1):
            for j in range(1, columna + 1):
                self.insertData(i, j, caracter)

    def insertData(self, fila, columna, caracter):
        aux, aux2, new_node = 0, 0, 0
        self.SizeG += 1

        if self.vacio():
            new_node = NodoOrtogonal(fila, columna, caracter)
            self.head = new_node
            self.size += 1
        else:
            aux = self.head

            while aux.abajo != None:
                aux = aux.abajo

            if self.size != fila:
                self.size += 1
                new_node = NodoOrtogonal(fila, columna, caracter)
                aux.abajo = new_node
                new_node.arriba = aux
            else:
                while aux.siguiente != None:
                    aux = aux.siguiente

                new_node = NodoOrtogonal(fila, columna, caracter)
                aux.siguiente = new_node
                new_node.anterior = aux

                if self.size > 1:
                    aux2 = aux.arriba.siguiente
                    aux2.abajo = new_node
                    new_node.arriba = aux2
                    
    def searchData(self, fila, columna):
        aux, tmp = None, None

        if self.head != None:
            tmp = self.head

            while tmp != None:
                aux = tmp

                while aux != None:
                    if int(fila) == int(aux.fila) and int(columna) == int(aux.columna):
                        return aux.caracter

                    aux = aux.siguiente

                tmp = tmp.abajo

            return None
        else:
            print("Matriz vacia")
            return
    
    def updateData(self, fila, columna, _caracter):
        aux = tmp = None

        if self.head != None:
            tmp = self.head
            while tmp != None:
                aux = tmp
                while aux != None:
                    if int(fila) == int(aux.fila) and int(columna) == int(aux.columna):
                        aux.caracter = _caracter
                    aux = aux.siguiente
                tmp = tmp.abajo
            return None
        else:
            print("Matriz vacia")
            return

    def printMatrixO(self):
        aux, tmp = None, None

        if self.head != None:
            tmp = self.head

            while tmp != None:
                aux = tmp

                while aux != None:
                    print(aux.caracter + " ")
                    aux = aux.siguiente

                print("")
                tmp = tmp.abajo
        else:
            return print("Matriz vacia")

    def drawMatrix(self):
        aux, contenido, file, tmp = None, "", None, None

        if self.head != None:
            contenido = ""
            contenido += "\ndigraph html {\nabc [shape = none, margin = 0, label=<\n<TABLE BORDER = \"1\" CELLBORDER = \"1\" CELLSPACING=\"0\" CELLPADDING=\"10\">\n"
            tmp = self.head

            while tmp != None:
                aux = tmp
                contenido += "<TR>"

                while aux != None:
                    contenido += f'<TD BGCOLOR="#ffffff">{aux.caracter}</TD>'
                    aux = aux.siguiente

                contenido += "</TR>"
                tmp = tmp.abajo

            contenido += "</TABLE>>];\n}"
            #print(contenido)
            dot = "Lineal_structure\PY\Matria_ortogonal\MatrizOrtogonal_Dot.txt"
            with open(dot, 'w') as grafo:
                grafo.write(contenido)
            result = "Lineal_structure\PY\Matria_ortogonal\MatrizOrtogonal_Graph.png"
            os.system("dot -Tpng " + dot + " -o " + result)
            webbrowser.open(result)
        else:
            return print("Error al tratar de dibujar la matriz")
