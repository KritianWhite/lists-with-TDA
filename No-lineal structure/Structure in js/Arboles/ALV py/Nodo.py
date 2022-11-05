class Nodo():
    def __init__(self, dato, valor):
        self.dato = dato
        self.valor = valor
        self.der = None
        self.izq = None
        self.altura = 0