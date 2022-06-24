function avl() {
    let avl = new AVL()
    avl.add(5)
    avl.add(10)	
    avl.add(20)
    avl.add(25)
    avl.add(30)
    avl.add(35)
    avl.add(40)

    // Muestra la lista como tal de los siguientes ordenes en una etiqueta <p></p>
    document.getElementById("log").innerHTML+='Preorder:  '
    avl.preorder(avl.root)
    document.getElementById("log").innerHTML+='<br>Inorder:   '
    avl.inorder(avl.root)
    document.getElementById("log").innerHTML+='<br>Postorder: '
    avl.postorder(avl.root)
    avl.dot = '{'
    avl.dotgen(avl.root)
    avl.dot += '}'

    // Usando la libreria vis-network
    let container = document.getElementById("mynetwork");
	let DOTstring = avl()
	let parsedData = vis.parseDOTNetwork(DOTstring);
	let data = {
	    nodes: parsedData.nodes,
	    edges: parsedData.edges
	}
    let options = {
        nodes: {
            widthConstraint: 20,
        },        
        layout: {
            hierarchical: {
                levelSeparation: 100,
                nodeSpacing: 100,
                parentCentralization: true,
                direction: 'UD',        // UD, DU, LR, RL
                sortMethod: 'directed',  // hubsize, directed
                shakeTowards: 'roots'  // roots, leaves                        
		    },
        },                        
    };

    let network = new vis.Network(container, data, options);

}
