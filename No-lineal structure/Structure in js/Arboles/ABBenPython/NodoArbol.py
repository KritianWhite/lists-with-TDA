class NodoArbol():
    def __init__(self, d, nom):
        self.dato = d
        self.nombre = nom
        self.hijoIzquierdo = None
        self.hijoDerecho = None

    def toString(self):
        return self.nombre + ", Su id es: " + str(self.dato)
