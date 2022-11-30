class Persona:
    def __init__(self, nombre, apellido, edad):
        self.nombre = nombre
        self.apellido = apellido
        self.edad = edad
        
    def nombre(self):
        return self.nombre
    
    def nombre(self, nombre):
        self.nombre = nombre
    
    def apellido(self):
        return self.apellido
    
    def apellido(self, apellido):
        self.apellido = apellido
    
    def edad(self):
        return self._edad
    
    def edad(self, edad):
        self.edad = edad
    
    def toString(self):
        return f"Nombre: {self.nombre}, Apellido: {self.apellido}, Edad: {self.edad}"