from Object import Canciones
from LinkedList_C import listaCircularSimple

if __name__ == '__main__':
    LCS = listaCircularSimple()
    
    LCS.agregarAlinicio(Canciones("Desire", 4, "Years and Years", "Desconocido"))
    LCS.agregarAlinicio(Canciones("Fell me", 3, "Trueno", "Sencillo"))
    LCS.agregarAlinicio(Canciones("Algo me gusta de ti", 5, "Wisin & Yandel", "Desconocido"))
    LCS.agregarAlinicio(Canciones("Hurricane", 5, "Arty", "Remix"))
    LCS.agregarAlinicio(Canciones("Ni contigo, ni sin ti", 2, "Pepe aguilar", "Esto si es cumbia"))
    print(LCS.buscarDato("Hola"))
    LCS.ordenamientoBurbuja()
    LCS.recorrerLista()
    LCS.graficarDot()