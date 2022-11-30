from MatrizDispersa import MatrizDispersa
from NodoInterno import NodoInterno

if __name__ == '__main__':
    
    MD = MatrizDispersa("")
    MD.insertar(NodoInterno(1, 1, "h"))
    MD.insertar(NodoInterno(1, 2, "*"))
    MD.insertar(NodoInterno(1, 3, "*"))
    MD.insertar(NodoInterno(1, 4, "*"))
    MD.insertar(NodoInterno(2, 1, "*"))
    MD.insertar(NodoInterno(2, 2, "o"))
    MD.insertar(NodoInterno(2, 3, "*"))
    MD.insertar(NodoInterno(2, 4, "*"))
    MD.insertar(NodoInterno(3, 1, "*"))
    MD.insertar(NodoInterno(3, 2, "*"))
    MD.insertar(NodoInterno(3, 3, "l"))
    MD.insertar(NodoInterno(3, 4, "*"))
    MD.insertar(NodoInterno(4, 1, "*"))
    MD.insertar(NodoInterno(4, 2, "*"))
    MD.insertar(NodoInterno(4, 3, "*"))
    MD.insertar(NodoInterno(4, 4, "a"))
    MD.insertar(NodoInterno(4, 5, "*"))
    MD.insertar(NodoInterno(4, 6, "*"))
    MD.insertar(NodoInterno(5, 1, "*"))
    MD.insertar(NodoInterno(5, 2, "*"))
    MD.insertar(NodoInterno(5, 3, "*"))
    MD.insertar(NodoInterno(5, 4, "*"))
    MD.insertar(NodoInterno(5, 5, "*"))

    MD.graficarDot()