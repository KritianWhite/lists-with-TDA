/*
NOTA: Esta clase objeto no se esta importando a la 
Clase Lista circular simple ya que se estaba utilizando 
quokka para la realizacion de pruebas, de lo contrario 
solo debe de importarse en el archivo de la clase de la 
lista circular simple
*/

export class Canciones{
    constructor(nombreSong, tiempoSong, artistaSong, albumSong){
        this._nombreSong = nombreSong
        this._tiempoSong = tiempoSong
        this._artistaSong = artistaSong
        this._albumSong = albumSong
    }
    get nombreSong(){
        return this._nombreSong
    }
    set nombreSong(nombreSong){
        this._nombreSong = nombreSong
    }
    get tiempoSong(){
        return parseInt(this._tiempoSong)
    }
    set tiempoSong(tiempoSong){
        this._tiempoSong = tiempoSong
    }
    get artistaSong(){
        return this._artistaSong
    }
    set artistaSong(artistaSong){
        this._artistaSong = artistaSong
    }
    get albumSong(){
        return this._artistaSong
    }
    set albumSong(albumSong){
        this._albumSong = albumSong
    }

    toString(){
        return `Album: ${this._albumSong}, Cancion: ${this._nombreSong}, Artista: ${this._artistaSong}, Tiempo: ${this._tiempoSong}`
    }
}