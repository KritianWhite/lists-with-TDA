import { Block, Data } from "./Block";

class Blockchain {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    isEmpty() {
        return this.head == null;
    }
    insertBlock(_from, skins) {
        let data = new Data(_from, skins)
        //print(data.skins)
        if (this.isEmpty()) {
            previoushash = '0000'
            //nonce = this.proof_of_work(previoushash)
            new_block = new Block(this.count, data, this.difficulty_target, previoushash)
            this.head = this.tail = new_block
            //Se crea el bloque en json y se almacena en la carpeta de blockchain
            this.createJSONBlock(new_block)
        }
        else {
            aux = this.tail
            previoushash = aux.hash
            //nonce = this.proof_of_work(aux.nonce)
            new_block = new Block(this.count, data, this.difficulty_target, previoushash)
            this.tail = aux.next = new_block
            this.tail.back = aux
            //Se crea el bloque en json y se almacena en la carpeta de blockchain
            this.createJSONBlock(new_block)
        }
        this.count += 1
    }
    //queda fuera de serie
    proof_of_work(last_proof) {
        let nonce = 0;
        while (this.validate_proof(last_proof, nonce) == false){
            nonce += 1;
        }
        return nonce;
    }

    //queda fuera de serie
    validate_proof(last_proof, proof) {
        let guess = `${last_proof}${proof}`.encode('utf-8');
        //guess_hash = hashlib.sha256(guess).hexdigest().find(self.difficulty_target);
        let guess_hash = str(hashlib.sha256(guess).hexdigest()).find(self.difficulty_target);
        return guess_hash == 0;
        //return guess_hash[:len(self.difficulty_target)] == self.difficulty_target;
    }
    drawBlockchain() {
        if (this.isEmpty()) {
            return 'no se puede graficar';
        } else {
            let temporal = this.head;
            let cont = 0;
            let cadena = '';
            cadena += 'digraph G { \n';
            cadena += 'rankdir=LR; \n';
            cadena += 'node[shape=box style=filled color="#ffffff" fontcolor="white" fillcolor="black"];\n';
            cadena += 'graph [fontsize=15 fontname="Verdana" compound=true];\n';
            cadena += 'bgcolor="SteelBlue";\n';
    
    
            while (temporal) {
    
                cadena += '  subgraph cluster_' + cont + '_block {\n';
                cadena += '  bgcolor="#283747";\n  fontcolor="white";\n';
                cadena += '    label="Block header ' + cont + '";\n';
                cadena += '    "Time stamp ' + cont + ':' + temporal.timestamp + '" "Nonce:' + temporal.nonce + '";\n';
                cadena += '    "Previoushash:' + temporal.previoushash + '" "Hash:' + temporal.hash + '";\n';
                cadena += '    "Merkle root:' + temporal.merkleroot + '";\n';
    
                cadena += '  }\n';
                if (temporal != this.head) {
                    cadena += '   "Hash:' + temporal.previoushash + '"->"Hash:' + temporal.hash + '" [ltail=cluster_' + (cont - 1) + '_block lhead=cluster_' + cont + '_block];\n';
                }
                temporal = temporal.next;
                cont += 1;
            }
            cadena += '}';
            console.log(cadena);
            const dotX = 'BlockChain_{}.dot'.format('BaseX');
            const file = open(dotX, 'w');
            file.write(cadena);
            file.close();
            const result = 'BlockChain_{}.png'.format('BlockChainX');
            system('dot -Tpng ' + dotX + ' -o ' + result);
            const commando = 'xdg-open ' + result;
            system(commando);
        }
    }

    createJSONBlock(bloque) {
        var timestamp = bloque.timestamp.replace(":", "_");
        const file = fs.openSync(`blockchain/${bloque.index}_${timestamp}.json`, "w");
        file.write(bloque.blockInfo());
        file.close();
    }
    
    __repr__() {
        var rep = "[\n";
        if (this.isEmpty()) {
            rep += "]";
        } else {
            var aux = this.head;
            while (aux != null) {
                rep += '\t'
                rep += `${aux.blockInfo()},`; if (aux.next != null); else `${aux.blockInfo()}`
                rep += '\n'
                aux = aux.next
            }
            rep += ']'
        }
        return rep;
    }
}
