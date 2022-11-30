from DoubleLinkedList_C import listaCircularDoble
from Object import Canciones

if __name__ == '__main__':
    LCD = listaCircularDoble()
    LCD.agregarAlfinal(Canciones("Get Lucky", "Contemporanea", 4))
    LCD.agregarAlfinal(Canciones("Starboy", "Regueton", 3))
    LCD.agregarAlfinal(Canciones("Imagination", "Para fumar mota", 5))
    LCD.agregarAlfinal(Canciones("Inside of my eyelids", "Para fumar mota", 2))
    LCD.agregarAlfinal(Canciones("Wait a minute", "Tranquila", 3))
    LCD.agregarAlfinal(Canciones("Notion", "Contemporanea", 2))
    LCD.agregarAlfinal(Canciones("Instant crush", "Contemporanea", 5))
    print(LCD.buscar("Starboy"))
    LCD.ordenamientoBurbuja()
    LCD.recorrerIniocio_Fin()
    LCD.graficarDobleDot()