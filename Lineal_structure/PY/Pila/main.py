from Pila import Pila

if __name__ == '__main__':
    
    P = Pila()
    
    P.apilar("Pizza de peperoni")
    P.apilar("Pizza de Hawaiiana")
    P.apilar("Pizza de Salmon")
    P.apilar("Pizza de Mucho queso")
    P.apilar("Pizza de Batman")
    P.desapilar()
    P.desapilar()
    P.graficarDot()