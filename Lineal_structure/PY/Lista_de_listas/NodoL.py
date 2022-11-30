from Lista import lista
class nodoL():
    def __init__(self, nombre):
        self.nombre = nombre
        self.lts = lista()
        self.siguiente = self.anterior = None