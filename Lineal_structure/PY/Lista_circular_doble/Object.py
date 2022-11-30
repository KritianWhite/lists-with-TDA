class Canciones:
    def __init__(self, nombreCancion, tipoCancion, tiempoCancion):
        self._nombreCancion = nombreCancion
        self._tipoCancion = tipoCancion
        self._tiempoCancion = tiempoCancion

    @property
    def nombreCancion(self):
        return self._nombreCancion

    @nombreCancion.setter
    def nombreCancion(self, nombreCancion):
        self._nombreCancion = nombreCancion

    @property
    def tipoCancion(self):
        return self._tipoCancion

    @tipoCancion.setter
    def tipoCancion(self, tipoCancion):
        self._tipoCancion = tipoCancion

    @property
    def tiempoCancion(self):
        return self._tiempoCancion

    @tiempoCancion.setter
    def tiempoCancion(self, tiempoCancion):
        self._tiempoCancion = tiempoCancion

    def toString(self):
        return f"Nombre: {self._nombreCancion}, Tipo: {self._tipoCancion}, Tiempo: {self._tiempoCancion}"