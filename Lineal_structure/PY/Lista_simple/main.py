from Object import Persona
from LinkedList import listaSimple

if __name__ == '__main__':
    LS = listaSimple()
    LS.agregarAlinicio(Persona("Alan", 20, "Walker"))
    LS.agregarAlinicio(Persona("Daniel", 31, "Barillas"))
    LS.agregarAlinicio(Persona("Christian", 21, "Blanco"))
    LS.agregarAlinicio(Persona("Javier", 18, "Santos"))
    LS.ordenamientoBurbuja()
    LS.buscarDato("Alan")
    LS.recorrerLista()
    LS.graficar()