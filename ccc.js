function calculator(calc) {
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);
    const r = document.getElementById("result");
    if (calc === 'add') {
        r.innerHTML = a + b;
    }
    else if (calc === 'sub') {
        r.innerHTML = a - b;
    }
    else if (calc === 'mul') {
        r.innerHTML = a * b;
    }
    else if (calc === 'div') {
        r.innerHTML = a / b;
    }
    else {

        alert("ERROR");
    }
} 