from Nodo import Nodo

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
