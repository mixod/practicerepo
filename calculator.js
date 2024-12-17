function calculator(calc) {
    const value1 = parseInt(document.getElementById("FirstNumber").value);
    const value2 = parseInt(document.getElementById("SecondNumber").value);
    const r = document.getElementById("result");

    if (calc === "add") {
        r.innerHTML = value1 + value2;
    }
    else if (calc === "sub") {
        r.innerHTML = value1 - value2;
    }
    else if (calc === "mul") {
        r.innerHTML = value1 * value2;
    }
    else if (calc === "div") {
        r.innerHTML = value1 / value2;
    }
    else {
        alert("Invalid Operation");
    }
}

