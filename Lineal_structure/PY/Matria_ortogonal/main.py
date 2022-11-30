from MatrizOrtogonal import MatrizOrtogonal

if __name__ == '__main__':
    
    MO = MatrizOrtogonal()
    MO.autofilling(6, 6, " ")
    
    MO.updateData(1, 1, "h")
    MO.updateData(1, 2, "*")
    MO.updateData(1, 3, "*")
    MO.updateData(1, 4, "*")
    MO.updateData(2, 1, "*")
    MO.updateData(2, 2, "o")
    MO.updateData(2, 3, "*")
    MO.updateData(2, 4, "*")
    MO.updateData(3, 1, "*")
    MO.updateData(3, 2, "*")
    MO.updateData(3, 3, "l")
    MO.updateData(3, 4, "*")
    MO.updateData(4, 1, "*")
    MO.updateData(4, 2, "*")
    MO.updateData(4, 3, "*")
    MO.updateData(4, 4, "a")
    MO.updateData(4, 5, "*")
    MO.updateData(4, 6, "*")
    MO.updateData(5, 1, "*")
    MO.updateData(5, 2, "*")
    MO.updateData(5, 3, "*")
    MO.updateData(5, 4, "*")
    MO.updateData(5, 5, "*")
    
    MO.drawMatrix()