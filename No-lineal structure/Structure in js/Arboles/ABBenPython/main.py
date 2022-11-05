from ArbolBinario import ArbolBinario

arbol = ArbolBinario()
arbol.agregarNodo(30, 'carlos')
arbol.agregarNodo(20, 'kevin')
arbol.agregarNodo(40, 'mariano')
arbol.agregarNodo(10, 'pedro')
arbol.agregarNodo(25, 'asael')
arbol.agregarNodo(35, 'roberto')
arbol.agregarNodo(45, 'christian')

# arbol.postOrden(arbol.raiz)
# print("postOrden-|")
# print("inOrden-|")
print("\npreOrden-|N")
arbol.preOrden(arbol.raiz)
print("\npreOrden-|N2")
print(arbol.sPreOrden(arbol.raiz))

print("\ninOrden-|n")
arbol.inOrden(arbol.raiz)
print("\ninOrden-|n2")
print(arbol.sInOrden(arbol.raiz))

print("\npostOrden-|n")
arbol.postOrden(arbol.raiz)
print("\npostOrden-|n2")
print(arbol.sPostOrden(arbol.raiz))


# print(arbol.buscarNodo(35).toString())
# arbol.graficar(arbol.raiz)
# print(arbol.buscarNodo(30).toString())
# arbol.eliminar(40)
# arbol.graficar(arbol.raiz)
