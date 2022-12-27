
class Node {
    constructor(left, right, value, content) {
        this.left = left;
        this.right = right;
        this.value = value;
        this.content = content;
    }

    static hash(val) {
        return require("crypto").createHash("sha256").update(val).digest("hex");
    }

    static doubleHash(val) {
        return this.hash(this.hash(val));
    }
}

export class MerkleTree {
    constructor(values) {
        this.__values = this.calculateLength(values);
        this.__buildTree(this.__values);
    }
   
    __buildTree(values) {
        let leaves = values.map(e => new Node(null, null, Node.doubleHash(e), e));
        if (leaves.length % 2 == 1) {
            leaves.push(leaves[leaves.length - 1]); // duplicate last elem if odd number of elements
        }
        this.root = this.__buildTreeRec(leaves);
    }

    __buildTreeRec(nodes) {
        let half = Math.floor(nodes.length / 2);
        if(nodes.length == 2) {
            return new Node(nodes[0], nodes[1], Node.doubleHash(nodes[0].value + nodes[1].value), nodes[0].content + nodes[1].content);
        }
        let left = this.__buildTreeRec(nodes.slice(0, half));
        let right = this.__buildTreeRec(nodes.slice(half));
        let value = Node.doubleHash(left.value + right.value);
        let content = left.content + right.content;
        return new Node(left, right, value, content);
    }
    calculateLength(values) {
        let res = [];
        for(let i = 0; i < values.length; i++) {
            let value = values[i];
            let string = value.toString();
            let length = string.length;
            let result = string + length.toString();
            res.push(result);
        }
        return res;
    }
    printTree() {
        this.__printTreeRec(this.root);
    }
    __printTreeRec(node) {
        if(node != null) {
            console.log(node.content);
            this.__printTreeRec(node.left);
            this.__printTreeRec(node.right);
        }
    }

    graficar(nombre) {
        let cadena = "";
        cadena += "digraph G { \n";
        cadena += "rankdir=TB; \n";
        cadena += "label=\"";
        cadena += nombre + "\"\n";
        cadena += "fontname=\"Arial Black\"\n" + "fontsize=\"25pt\"\n";
        cadena += "node[color=\"blue\",style=\"rounded,filled\",fillcolor=lightgray, shape=record, fontname=\"Arial\"];\n";
        cadena +=  this.graficadora(this.root);
        cadena += "} \n";
        let dotX = "MerkleTree_{}.dot".format("Base");
        let file = open(dotX, "w");
        file.write(cadena);
        file.close();
        let result = "MerkleTree_{}.png".format(nombre);
        system("dot -Tpng " + dotX + " -o " + result);
        let commando = "xdg-open " + result;
        system(commando);
        //print(cadena)
    }

    isNumeric(s) {
        try {
            complex(s);
            return true;
        } catch (e) {
            return false;
        }
    }

    graficadora(node) {
        let cadena = "";
        
        if((node.right === null) && (node.left === null)) {
            cadena = "\"nodo" + node.value + "\"" + "[label =\"" + node.value + "\"]; \n";
    
            if (this.isNumeric(node.content)) {
                cadena += "\"nodo" + node.content + "\"" + "[label =\"" + str(-1) + "\"]; \n";
                cadena += "\"nodo" + node.value + "\"" + "->" + "\"nodo" + node.content + "\"[dir=back];\n";
            } else {
                cadena += "\"nodo" + node.content + "\"" + "[label =\"" + node.content + "\"]; \n";
                cadena += "\"nodo" + node.value + "\"" + "->" + "\"nodo" + node.content + "\"[dir=back];\n";
            }
    
        } else {
            cadena = "\"nodo" + node.value + "\"" + "[label =\"<C0>|" + node.value + "|<C1> \"]; \n";
        }
        
        if(node.left !== null) {
            cadena += this.graficadora(node.left) +  "\"nodo" + node.value + "\":C0->\"nodo" + node.left.value + "\"[dir=back]\n";
        }
        if(node.right !== null) {
            cadena += this.graficadora(node.right) + "\"nodo" + node.value +  "\":C1->\"nodo" + node.right.value + "\"[dir=back]\n";
        }
        
        return cadena;
    }

    getRootHash = () => {
        return this.root.value
    }

    calculateLength(lts) {
        var k = 0;
        var bin = 2;
        while(lts.length >= 2 ** k){
            k += 1; //sigue creciendo
        }
        bin = bin ** k;
        var nuevoLarge = bin-lts.length;
        for(var x = 0; x < nuevoLarge; x++){
            lts.push((-1) * (x+1));
        }
        console.log(lts);
        return lts;
    }
}
