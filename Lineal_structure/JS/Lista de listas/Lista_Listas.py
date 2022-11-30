from os import system, startfile

class Nodo():
    def __init__(self, asiento, name):
        self.asiento = asiento
        self.name = name
        self.siguiente = None
        self.anterior = None

class lista():
    def __init__(self):
        self.raiz = None
        self.ultimo = None
        self.correlativo = 1
    
    def add(self, nombre):
        nuevo = Nodo(self.correlativo, nombre)
        self.correlativo += 1
        if(self.raiz == None):
            self.raiz = self.ultimo = nuevo
            return
        else:
            self.ultimo.siguiente = nuevo
            nuevo.anterior = self.ultimo
            self.ultimo = nuevo
            return
    
    def print(self):
        aux = self.raiz
        while(aux != None):
            print("Numero de asiento: {}, Pasajero: {}\n".format(aux.asiento, aux.name), end = '')
            aux = aux.siguiente
    
    def inverse_print(self):
        aux = self.ultimo
        while aux is not None:
            print("Numero de asiento: {}, Pasajero: {}\n".format(aux.asiento, aux.name), end = '')
            aux = aux.anterior

class nodoL():
    def __init__(self, nombre):
        self.nombre = nombre
        self.lts = lista()
        self.siguiente = self.anterior = None

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
        file = open(f'ListaDeListas.dot', 'w')
        cadena = ""
        cadena = cadena + 'digraph G { \n'
        #* Recorremos la lista global para crear nodos
        cont = 0
        vertical = self.raiz
        while(vertical != None):
            cadena = cadena + f'"{vertical.nombre}"[shape=box, rankdir=UD, style="filled", label="{vertical.nombre}", pos="0,-{str(cont)}!"]\n'
            #* Recorremos la lista interna de la lista global para crear los nodos
            horizontal = vertical.lts.raiz
            cont2 = 0
            while(horizontal != None):
                cadena = cadena + f'"{horizontal.name}"[shape=box, rankdir=LR, style="filled", label="{horizontal.name}", pos="{str(cont2)},-{str(cont)}!"]\n'
                cont2 += 1
                horizontal = horizontal.siguiente
            cont += 1
            vertical = vertical.siguiente
        
        #* Enlazar nodos verticales
        vertical = self.raiz
        while(vertical != None):
            if(vertical == self.raiz):
                cadena = cadena + f'"{vertical.nombre}"'
            else:
                cadena = cadena + f'->"{vertical.nombre}"'
            vertical = vertical.siguiente
        cadena = cadena + "\n"
        
        #* Enlazamos los nodos horizontales
        vertical = self.raiz
        while(vertical != None):
            horizontal = vertical.lts.raiz
            if(horizontal != None):
                cadena = cadena + f'"{vertical.nombre}"->"{horizontal.name}"\n'
                while(horizontal != None):
                    if(horizontal == vertical.lts.raiz):
                        cadena = cadena + f'"{horizontal.name}"'
                    else:
                        cadena = cadena + f'->"{horizontal.name}"'
                    horizontal = horizontal.siguiente
            cadena = cadena + "\n"
            vertical = vertical.siguiente
        
        #* Colocamos los nodos de la lista principal a la misma altura
        vertical = self.raiz
        cadena = cadena + "\n{rank=same;"
        while(vertical != self.ultimo):
            cadena = cadena + f'"{vertical.nombre}",'
            vertical = vertical.siguiente
        cadena = cadena + f'"{vertical.nombre}"'
        cadena = cadena + "}\n"
        
        cadena = cadena + "}\n"
        file.write(cadena)
        file.close()
        system("dot -Tpng ListaDeListas.dot -o ListaDeListas.png")
        startfile("ListaDeListas.png")

ltss = Lista_Listas()
ltss.add("Avion 1", "Carlos")
ltss.add("Avion 1", "Andree")
ltss.add("Avion 1", "Marvin")
ltss.add("Avion 1", "Juan")
ltss.add("Avion 2", "Marlon")
ltss.add("Avion 2", "Antonio")
ltss.add("Avion 3", "Everest")
ltss.add("Avion 3", "Sergio")
ltss.add("Avion 3", "Miguel")
ltss.add("Avion 3", "Sara")
ltss.add("Avion 3", "Maria")
ltss.print()
ltss.graficar()