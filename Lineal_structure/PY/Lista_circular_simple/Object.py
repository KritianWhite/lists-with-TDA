class Canciones:
    def __init__(self, nombreSong, tiempoSong, artistaSong, albumSong):
        self.nombreSong = nombreSong
        self.tiempoSong = tiempoSong
        self.artistaSong = artistaSong
        self.albumSong = albumSong
        
    def get_nombreSong(self):
        return self._nombreSong
    
    def set_nombreSong(self, nombreSong):
        self.nombreSong = nombreSong
        
    def get_tiempoSong(self):
        return int(self.tiempoSong)
    
    def set_tiempoSong(self, tiempoSong):
        self.tiempoSong = tiempoSong
        
    def get_artistaSong(self):
        return self.artistaSong
    
    def set_artistaSong(self, artistaSong):
        self.artistaSong = artistaSong
        
    def get_albumSong(self):
        return self.artistaSong
    
    def set_albumSong(self, albumSong):
        self.albumSong = albumSong
        
    def toString(self):
        return "Album: " + str(self.albumSong) + ", Cancion: " + str(self.nombreSong) + ", Artista: " + str(self.artistaSong) + ", Tiempo: " + str(self.tiempoSong)