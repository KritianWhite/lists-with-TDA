from NodoL import nodoL
import os, webbrowser

class Lista_Listas():
    def __init__(self):
        self.raiz = None
        self.ultimo = None
    
    def search(self, name):
        aux = self.raiz
        while(aux != None):
            if(aux.nombre == name):
                return True
            aux = aux.siguiente
        return False
    
    #* Metodo que retorna el nodo que hace match con el nombre que ingresa
    def get(self, name):
        aux = self.raiz
        while(aux != None):
            if(aux.nombre == name):
                return aux
            aux = aux.siguiente
        return None
    
    
    def add(self, aeronave, pasajero):
        if(self.raiz == None):
            self.raiz = self.ultimo = nodoL(aeronave)
            self.raiz.lts.add(pasajero)
            return
        else:
            #* comparamos el valor para saber si existe la aeronave en la lista
            if(self.search(aeronave) == False):
                nuevo = nodoL(aeronave) #* creamos un nuevo nodo para la lista de aeronaves
                nuevo.lts.add(pasajero) #* Ingresamos el primer pasajero de la lista
                self.ultimo.siguiente = nuevo
                nuevo.anterior = self.ultimo
                self.ultimo = nuevo
                return
            else:
                tmp = self.get(aeronave)
                tmp.lts.add(pasajero)
                return
    
    def print(self):
        aux = self.raiz
        while(aux != None):
            print(f"----------------Aeronave:{aux.nombre}------------\n",end="")
            aux.lts.print()
            aux = aux.siguiente
    
    def graficar(self):
        file = open(f'Lineal_structure\PY\Lista_de_listas\Lista_de_Listas_Dot.txt', )
        cadena = ""
        cadena = cadena + "digraph G { \n"
        cont = 0
        vertical = self.raiz
        while vertical is not None:
            cadena = cadena + f"\"0{vertical.nombre}\"[shape=box, rankdir=UD, style=\"filled\", label=\"{vertical.nombre}\", pos=\"0,-{str(cont)}!\"]"
            horizontal = vertical.lts.raiz
            cont2 = 0
            while horizontal is not None:
                cadena = cadena + f"\"{str(cont)}{horizontal.name}{str(cont2)}\"[shape=box, rankdir=LR, style=\"filled\", label=\"{horizontal.name}\", pos=\"{str(cont2)},-{str(cont)}!\"]"
                cont2 += 1
                horizontal = horizontal.siguiente
            cont += 1
            vertical = vertical.siguiente
        vertical = self.raiz
        while vertical is not None:
            if vertical is self.raiz:
                cadena = cadena + f"\"0{vertical.nombre}\""
            else:
                cadena = cadena + f"->\"0{vertical.nombre}\""
            vertical = vertical.siguiente
        cadena = cadena + "\n"
        cont = 0
        vertical = self.raiz
        while vertical is not None:
            horizontal = vertical.lts.raiz
            if horizontal is not None:
                cont2 = 0
                cadena = cadena + f"\"0{vertical.nombre}\"->\"{str(cont)}{horizontal.name}{str(cont2)}\""
                while horizontal is not None:
                    if horizontal is vertical.lts.raiz:
                        cadena = cadena + f"\"{str(cont)}{horizontal.name}{str(cont2)}\""
                    else:
                        cadena = cadena + f"->\"{str(cont)}{horizontal.name}{str(cont2)}\""
                    cont2 += 1
                    horizontal = horizontal.siguiente
                cont += 1
            cadena = cadena + "\n"
            vertical = vertical.siguiente
        vertical = self.raiz
        cadena = cadena + "\n{rank=same;"
        while vertical is not self.ultimo:
            cadena = cadena + f"\"0{vertical.nombre}\","
            vertical = vertical.siguiente
        cadena = cadena + f"\"0{vertical.nombre}\""
        cadena = cadena + "}\n"
        cadena = cadena + "}\n"
        #print(cadena)
        dot = "Lineal_structure\PY\Lista_de_listas\Lista_de_Listas_Dot.txt"
        with open(dot, 'w') as grafo:
            grafo.write(cadena)
        result = "Lineal_structure\PY\Lista_de_listas\Lista_de_Listas_Graph.png"
        os.system("dot -Tpng " + dot + " -o " + result)
        webbrowser.open(result)