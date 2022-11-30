/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cola;

/**
 *
 * @author kriti
 */
public class Nodo {
    
    private Object dato;
    private Nodo siguiete;
    
    public Nodo(Object dato){
        this.dato = dato;
        this.siguiete = null;
    }
    
}
