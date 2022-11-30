from Object import Persona
from DoubleLinkedList import listaDoble

if __name__ == '__main__':
    LD = listaDoble()
    LD.agregarAlfinal(Persona("Carlos", "Soto", 20))
    LD.agregarAlinicio(Persona("Alan", "Walker", 36))
    LD.agregarAlinicio(Persona("Daniel", "Barillas",15))
    LD.agregarAlinicio(Persona("Christian", "Blanco", 21))
    LD.agregarAlinicio(Persona("Javier", "Santos", 40))
    LD.ordenamientoBurbuja()
    #LD.buscarDato("Jaime")
    LD.recorrerLista()
    LD.graficarDobleDot()