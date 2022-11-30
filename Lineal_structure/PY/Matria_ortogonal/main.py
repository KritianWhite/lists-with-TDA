from MatrizOrtogonal import MatrizOrtogonal
from NodoInterno import NodoInterno

if __name__ == '__main__':
    
    MD = MatrizOrtogonal("")
    
    #MD.llenarMatriz()
    MD.autofilling(25, 25, " ")
    MD.ubicarCoordenada(NodoInterno(1, 1, "h"))
    MD.ubicarCoordenada(NodoInterno(1, 2, "*"))
    MD.ubicarCoordenada(NodoInterno(1, 3, "*"))
    MD.ubicarCoordenada(NodoInterno(1, 4, "*"))
    MD.ubicarCoordenada(NodoInterno(2, 1, "*"))
    MD.ubicarCoordenada(NodoInterno(2, 2, "o"))
    MD.ubicarCoordenada(NodoInterno(2, 3, "*"))
    MD.ubicarCoordenada(NodoInterno(2, 4, "*"))
    MD.ubicarCoordenada(NodoInterno(3, 1, "*"))
    MD.ubicarCoordenada(NodoInterno(3, 2, "*"))
    MD.ubicarCoordenada(NodoInterno(3, 3, "l"))
    MD.ubicarCoordenada(NodoInterno(3, 4, "*"))
    MD.ubicarCoordenada(NodoInterno(4, 1, "*"))
    MD.ubicarCoordenada(NodoInterno(4, 2, "*"))
    MD.ubicarCoordenada(NodoInterno(4, 3, "*"))
    MD.ubicarCoordenada(NodoInterno(4, 4, "a"))
    MD.ubicarCoordenada(NodoInterno(4, 5, "*"))
    MD.ubicarCoordenada(NodoInterno(4, 6, "*"))
    MD.ubicarCoordenada(NodoInterno(5, 1, "*"))
    MD.ubicarCoordenada(NodoInterno(5, 2, "*"))
    MD.ubicarCoordenada(NodoInterno(5, 3, "*"))
    MD.ubicarCoordenada(NodoInterno(5, 4, "*"))
    MD.ubicarCoordenada(NodoInterno(5, 5, "*"))

    MD.graficarDot()