class Nodo:
    def __init__(self, token, lexema):
        self.token = token
        self.lexema = lexema
        self.hijos = []

    def AddHijo(self, nuevo):
        self.hijos.append(nuevo)

    def getToken(self):
        return self.token

    def GraficarSintactico(self):
        grafica = "digraph {\n\n" + self.GraficarNodos(self, "0") + "\n\n}"
        return grafica

    def GraficarNodos(self, nodo, i):
        k = 0
        r = ""
        nodoTerm = nodo.token
        nodoTerm = nodoTerm.replace("\"", "")
        r = "node" + i + "[label = \"" + nodoTerm + "\"];\n"

        for j in range(0, len(nodo.hijos)):
            r = r + "node" + i + " -> node" + i + str(k) + "\n"
            r = r + self.GraficarNodos(nodo.hijos[j], i + str(k))
            k = k + 1

        if not (nodo.lexema.match("")) or not (nodo.lexema.match("")):
            nodoToken = nodo.lexema
            nodoToken = nodoToken.replace("\"", "")
            r = r + "node" + i + "c[label = \"" + nodoToken + "\"];\n"
            r = r + "node" + i + " -> node" + i + "c\n"
        return r