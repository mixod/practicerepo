
function names() {
    const a = ["ram", "shyam", "hari"];
    a.forEach(element => {
        const x = document.createElement("li");
        const y = document.createTextNode(element);
        x.appendChild(y);
        document.getElementById("listofnames").appendChild(x);
    });

}