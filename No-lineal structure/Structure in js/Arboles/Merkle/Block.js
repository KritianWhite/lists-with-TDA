import { MerkleTree } from "./merkle.js";

export class Data {
    constructor(_from = null, skins = null) {
        this._from = _from;
        this.skins = skins;
    }
}

export class Block{
    difficulty_target = "0000";
    index;
    timestamp;
    data;
    nonce;
    previoushash;
    rootmerkle;
    hash;

    constructor(index, data, difficulty_target, previoushash=''){
        this.index = index;
        this.difficulty_target = difficulty_target;
        this.timestamp = datetime.now().strftime("%d-%m-%Y::%H:%M:%S");
        this.data = data;
        this.nonce = 0;
        this.previoushash = previoushash;
        this.mtEDD = null; //Se toma la referencia en memoria del arbol merkle
        this.merkleroot = this.calcMerkleRoot();
        this.hash = this.calcBlockhash();

        this.next = null;
        this.back = null;
    }

    calcMerkleRoot() {
        let elems = [];
        for (x in this.data.skins['data']) {
            //print(x)
            elems.append(x["SKIN"]+str(x["VALUE"]));
        }
        this.mtEDD = MerkleTree(elems);
        //mt.graficar(mt.getRootHash())
        this.mtEDD.graficar(str(this.index));
        return this.mtEDD.getRootHash();
    }
    
    calcBlockhash() {
        // Verificar el orden de concatenacion
        let nonce = 0;
        while (true) {
            let h = str(this.index) + str(this.timestamp) + this.previoushash + this.merkleroot + str(nonce);
            nonce += 1;
            if (str(hashlib.sha256(h.encode('utf-8')).hexdigest()).find(this.difficulty_target) == 0) {
                this.nonce = nonce;
                return hashlib.sha256(h.encode('utf-8')).hexdigest();
            }
        }
        //return hashlib.sha256(h.encode('utf-8')).hexdigest()
    }

    rawblockInfo() {
        return {
            index: str(self.index),
            timestamp: self.timestamp,
            nonce: str(self.nonce),
            data: {
                FROM: self.data._from,
                SKINS: self.data.skins
            },
            hash: self.hash,
            previoushash: self.previoushash,
            merkle_root: self.merkleroot
        };
    }
    
    blockInfo() {
        return JSON.stringify(rawblockInfo(), null, 4);
    }
}