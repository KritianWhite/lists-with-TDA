class Persona:

    def __init__(self, nombre, edad, apellido):
        self.nombre = nombre
        self.edad = edad
        self.apellido = apellido

    def get_nombre(self):
        return self.nombre
    
    def set_nombre(self, nombre):
        self.nombre = nombre

    def get_edad(self):
        return self.edad
    
    def set_edad(self, edad):
        self.edad = edad

    def get_apellido(self):
        return self.apellido
    
    def set_apellido(self, apellido):
        self.apellido = apellido
    
    def toString(self):
        return f"nombre: {self.nombre}, apellido: {self.apellido}, edad: {self.edad}"