from ListaEncabezado import ListaEncabezado
from NodoEncabezado import NodoEncabezado
from NodoInterno import NodoInterno
import os, webbrowser

class MatrizDispersa:
    def __init__(self, capa = None):
        self.capa = capa
        self.filas = ListaEncabezado("LISTAS")
        self.columnas = ListaEncabezado("COLUMNAS")

    def insertar(self, nodoInterno):
        encabezadoX = self.filas.getEncabezado(nodoInterno.x)
        encabezadoY = self.columnas.getEncabezado(nodoInterno.y)

        if (encabezadoX == None):
            encabezadoX = NodoEncabezado(nodoInterno.x)
            self.filas.insertarEncabezado(encabezadoX)
        
        if (encabezadoY == None):
            encabezadoY = NodoEncabezado(nodoInterno.y)
            self.columnas.insertarEncabezado(encabezadoY)

        if (encabezadoX.acceso == None):
            encabezadoX.acceso = nodoInterno
        else:
            if (nodoInterno.y < encabezadoX.acceso.y):
                nodoInterno.derecha = encabezadoX.acceso
                encabezadoX.acceso.izquierda = nodoInterno
                encabezadoX.acceso = nodoInterno
            else:
                aux = encabezadoX.acceso

                while (aux != None):
                    if (nodoInterno.y < aux.y):
                        nodoInterno.derecha = aux
                        nodoInterno.izquierda = aux.izquierda
                        aux.izquierda.derecha = nodoInterno
                        aux.izquierda = nodoInterno
                        break
                    else:
                        if (aux.derecha == None):
                            aux.derecha = nodoInterno
                            nodoInterno.izquierda = aux
                            break
                        else:
                            aux = aux.derecha

        if (encabezadoY.acceso == None):
            encabezadoY.acceso = nodoInterno
        else:
            if (nodoInterno.x < encabezadoY.acceso.x):
                nodoInterno.abajo = encabezadoY.acceso
                encabezadoY.acceso.arriba = nodoInterno
                encabezadoY.acceso = nodoInterno
            else:
                aux2 = encabezadoY.acceso

                while (aux2 != None):
                    if (nodoInterno.x < aux2.x):
                        nodoInterno.abajo = aux2
                        nodoInterno.arriba = aux2.arriba
                        aux2.arriba.abajo = nodoInterno
                        aux2.arriba = nodoInterno
                        break
                    else:
                        if (aux2.abajo == None):
                            aux2.abajo = nodoInterno
                            nodoInterno.arriba = aux2
                            break
                        else:
                            aux2 = aux2.abajo
    
    def print_matriz(self):
        aux = self.filas.primero
        aux2 = aux.acceso
        cont = 0

        while aux is not None:
            cont += 1

            while aux2 is not None:
                print(aux2.x, aux2.y, aux2.caracter)
                aux2 = aux2.derecha

            aux = aux.siguiente

            if aux is not None:
                aux2 = aux.acceso

    def print_matriz2(self):
        Matriz2 = []
        aux = self.filas.primero
        aux2 = aux.acceso
        cont = 0

        while aux is not None:
            MatrizAux = []
            cont += 1

            while aux2 is not None:
                MatrizAux.append(aux2.caracter)
                aux2 = aux2.derecha

            aux = aux.siguiente
            Matriz2.append(MatrizAux)

            if aux is not None:
                aux2 = aux.acceso

        aux = self.filas.primero
        aux2 = aux.acceso
        cont = 0
        return Matriz2
    
    def graficarDot(self):
        aux = None
        aux2 = None
        cont = None
        grafo = "digraph T{ \nnode[shape=box fontname=\"Arial\" fillcolor=\"white\" style=filled ]"
        grafo += "\nroot[label = \"capa: " + self.capa + "\", group=1]\n"
        grafo += "label = \"Matriz Dispersa\" \nfontname=\"Arial Black\" \nfontsize=\"15pt\" \n\n\n"
        
        x_fila = self.filas.primero
        while (x_fila != None):
            grafo += f'F{x_fila.id}[label="{x_fila.id}",fillcolor="plum",group=1];\n'
            x_fila = x_fila.siguiente
        
        x_fila = self.filas.primero
        while (x_fila != None):
            if (x_fila.siguiente != None):
                grafo += f'F{x_fila.id}->F{x_fila.siguiente.id};\n'
                grafo += f'F{x_fila.siguiente.id}->F{x_fila.id};\n'
        
            x_fila = x_fila.siguiente
        
        y_columna = self.columnas.primero
        
        while (y_columna != None):
            group = int(y_columna.id) + 1
            grafo += f'C{y_columna.id}[label="C{y_columna.id}",fillcolor="powderblue",group={int(group)}];\n'
            y_columna = y_columna.siguiente
        
        cont = 0
        y_columna = self.columnas.primero
        
        while (y_columna != None):
            if (y_columna.siguiente != None):
                grafo += f'C{y_columna.id}->C{y_columna.siguiente.id}\n'
                grafo += f'C{y_columna.siguiente.id}->C{y_columna.id}\n'
        
            cont += 1
            y_columna = y_columna.siguiente
        
        y_columna = self.columnas.primero
        x_fila = self.filas.primero
        grafo += f'root->F{x_fila.id};\n root->C{y_columna.id};\n'
        grafo += "{rank=same;root;"
        cont = 0
        y_columna = self.columnas.primero
        
        while (y_columna != None):
            grafo += f'C{y_columna.id};'
            cont += 1
            y_columna = y_columna.siguiente
        
        grafo += "}\n"
        aux = self.filas.primero
        aux2 = aux.acceso
        cont = 0
        
        while (aux != None):
            cont += 1
        
            while (aux2 != None):
                grafo += f'N{aux2.x}_{aux2.y}[label="{aux2.caracter}",group="{int(aux2.y) + 1}", fillcolor="white"];\n'
                aux2 = aux2.derecha
        
            aux = aux.siguiente
        
            if (aux != None):
                aux2 = aux.acceso
            
        aux = self.filas.primero
        aux2 = aux.acceso
        cont = 0
        while aux != None:
            rank = "{" + f'rank = same;F{aux.id};'
            cont = 0
            while aux2 != None:
                if cont == 0:
                    grafo += f'F{aux.id}->N{aux2.x}_{aux2.y};\n'
                    grafo += f'N{aux2.x}_{aux2.y}->F{aux.id};\n'
                    cont += 1
                if aux2.derecha != None:
                    grafo += f'N{aux2.x}_{aux2.y}->N{aux2.derecha.x}_{aux2.derecha.y};\n'
                    grafo += f'N{aux2.derecha.x}_{aux2.derecha.y}->N{aux2.x}_{aux2.y};\n'
                rank += f'N{aux2.x}_{aux2.y};'
                aux2 = aux2.derecha
            aux = aux.siguiente
            if aux != None:
                aux2 = aux.acceso
            grafo += rank + "}\n"
        aux = self.columnas.primero
        aux2 = aux.acceso
        cont = 0
        while aux != None:
            cont = 0
            grafo += ""
            while aux2 != None:
                if cont == 0:
                    grafo += f'C{aux.id}->N{aux2.x}_{aux2.y};\n'
                    grafo += f'N{aux2.x}_{aux2.y}->C{aux.id};\n'
                    cont += 1
                if aux2.abajo != None:
                    grafo += f'N{aux2.abajo.x}_{aux2.abajo.y}->N{aux2.x}_{aux2.y};\n'
                    grafo += f'N{aux2.x}_{aux2.y}->N{aux2.abajo.x}_{aux2.abajo.y};\n'
                aux2 = aux2.abajo
            aux = aux.siguiente
            if aux != None:
                aux2 = aux.acceso
        grafo += "}"
        #print(grafo)
        dot = "Lineal_structure\PY\Matriz_dispersa\MatrizDispersa_Dot.txt"
        with open(dot, 'w') as graf:
            graf.write(grafo)
        result = "Lineal_structure\PY\Matriz_dispersa\MatrizDispersa_Graph.png"
        os.system("dot -Tpng " + dot + " -o " + result)
        webbrowser.open(result)