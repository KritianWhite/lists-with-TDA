package main

import (
    "fmt"
    "os"
    "os/exec"
)

type Nodo struct {
    dato int
    siguiente *Nodo
}

type Cola struct {

    frente *Nodo
    atras *Nodo
    tamanio int
}

func (this *Cola) getTamanio() int {
    return this.tamanio
}

func (this *Cola) arribo(dato string) {

    nodo_nuevo := Nodo{dato, nil}

    if this.frente == nil {
        this.frente = &nodo_nuevo
    } else {
        this.atras.siguiente = &nodo_nuevo
	}

    this.atras = &nodo_nuevo
    this.tamanio += 1
}

func (this *Cola) atencion() string {

    dato := this.frente.dato
    this.frente = this.frente.siguiente

    if this.frente == nil {
    	 this.atras = nil
    }
    this.tamanio -= 1
    return dato
}

func (this *Cola) esVacio() bool {
    return this.frente == nil
}

func (this *Cola) en_frente() string {
    return this.frente.dato
}

func (this *Cola) getTamanio() int {
    return this.tamanio
}

func (this *Cola) mover_al_final() string {
    dato := this.atencion()
    this.arribo(dato)
    return dato
}

func (this *Cola) listar() {

    aux := this.frente

    if this.esVacio() {
        return fmt.Println("La cola esta vacia")
    }
    this.temp := []string{}
    for aux != nil {
        this.temp = append(this.temp, aux.dato)
        aux = aux.siguiente
    }
    fmt.Println(this.temp)
}



func (this *Cola) graficarDot() {

    temporal := this.frente
    cont := 0
    cadena := ""

    cadena += "digraph G { \n"
    cadena += "rankdir=RL \n"

    for temporal != nil {
        cadena += "Node" + strconv.Itoa(cont) + "[label=\"" + temporal.dato+"\"];\n"
        if temporal != this.frente {
            cadena += "Node" + strconv.Itoa(cont) + " -> " + "Node" + strconv.Itoa(cont - 1) + ";\n"
        }
        temporal = temporal.siguiente
        cont += 1
    }

    cadena += "}"
    //print(cadena)

    dot := "Lineal_structure\\Go\\Cola\\Cola_Dot.txt"
    with open(dot, 'w') as grafo:
        grafo.write(cadena)
    result := "Lineal_structure\\Go\\Cola\\Cola_Graph.png"
    os.system("dot -Tpng "+ dot +" -o "+ result)
    webbrowser.open(result)

}

func main() ()  {
    
}