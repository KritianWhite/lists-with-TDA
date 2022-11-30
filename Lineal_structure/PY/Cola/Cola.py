from Nodo import Nodo
import os
import webbrowser

class Cola:
    def __init__(self):
        self.frente = None
        self.atras = None
        self.tamanio = 0

    def getTamanio(self):
        return self.tamanio

    def arribo(self, dato):
        nodo_nuevo = Nodo(dato)

        if self.frente is None:
            self.frente = nodo_nuevo
        else:
            self.atras.siguiente = nodo_nuevo

        self.atras = nodo_nuevo
        self.tamanio += 1

    def atencion(self):
        dato = self.frente.dato
        self.frente = self.frente.siguiente

        if self.frente is None:
            self.atras = None

        self.tamanio -= 1
        return dato

    def esVacio(self):
        return self.frente is None

    def en_frente(self):
        return self.frente.dato.__str__()

    def getTamanio(self):
        return self.tamanio

    def mover_al_final(self):
        dato = self.atencion()
        self.arribo(dato)
        return dato

    def listar(self):
        aux = self.frente

        if self.esVacio():
            return print("La cola esta vacia")

        self.temp = []

        while aux is not None:
            self.temp.append(aux.dato)
            aux = aux.siguiente

        print(self.temp)

    def graficarDot(self):
        temporal = self.frente
        cont = 0
        cadena = ""
        cadena += "digraph G { \n"
        cadena += "rankdir=RL \n"

        while temporal is not None:
            cadena += "Node" + str(cont) + "[label=\"" + temporal.dato+"\"];\n"

            if temporal is not self.frente:
                cadena += "Node" + str(cont) + " -> " + "Node" + str(cont - 1) + ";\n"

            temporal = temporal.siguiente
            cont += 1


        cadena += "}"
        #print(cadena)
        dot = "Lineal_structure\PY\Cola\Cola_Dot.txt"
        with open(dot, 'w') as grafo:
            grafo.write(cadena)
        result = "Lineal_structure\PY\Cola\Cola_Graph.png"
        os.system("dot -Tpng "+ dot +" -o "+ result)
        webbrowser.open(result)