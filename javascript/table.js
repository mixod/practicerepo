
    function alu() {
        const names = ["ram", "shyam", "hari", "gita"];
        names.forEach(element => { 
            const node = document.createElement("th");
            const textnode = document.createTextNode(element);
            node.appendChild(textnode);
            document.getElementById("table").appendChild(node);
        });
    }
