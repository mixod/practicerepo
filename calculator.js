function calculator(calc){
   const value1= parseInt(document.getElementById("FirstNumber").value);
    const value2 = parseInt(document.getElementById("SecondNumber").value);
    const result = document.getElementById("result");

    if(calc === "add"){
        result.innerHTML = value1 + value2 ;
    }
    else if(calc === "sub"){
        result.innerHTML = value1 - value2 ;
    }
    else if(calc === "mul"){
        result.innerHTML = value1 * value2 ;
    }
    else if(calc === "div"){
        result.innerHTML = value1 / value2 ;
    }
    else{
        alert("Invalid Operation");
    }
}

