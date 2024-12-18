function demo() {
    const node1 = document.createElement("li");
    const textnode1 = document.createTextNode("RAJAN");
    node1.appendChild(textnode1);


    const node2 = document.createElement("li");
    const textnode2 = document.createTextNode("BIjen");
    node2.appendChild(textnode2);

   
    const node3 = document.createElement("li");
    const textnode3 = document.createTextNode("MIxo");
    node3.appendChild(textnode3);

   
    document.getElementById("ullist").appendChild(node1);
    document.getElementById("ullist").appendChild(node2);
    document.getElementById("ullist").appendChild(node3);
}