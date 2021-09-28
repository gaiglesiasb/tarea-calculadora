
// let valueOne = parseInt(prompt("First number"));
// let operator = prompt("What do you want to do? (+-*/)");
// let valueTwo = parseInt(prompt("Second Number"));


// if (operator=="+") {
//     let resultado = valueOne + valueTwo;
//     document.getElementById("resultado2").innerHTML= resultado.toString();
// }
// else if (operator=="-") {
//     let resultado = valueOne - valueTwo;
//     document.getElementById("resultado").innerHTML= resultado.toString();
// }
// else if (operator=="*") {
//     let resultado = valueOne * valueTwo;
//     document.getElementById("resultado").innerHTML= resultado.toString();
// }
// else if (operator=="/"){
//     let resultado = valueOne / valueTwo;
//     document.getElementById("resultado").innerHTML= resultado.toString();
// }

function calculate(){
    let valueOne = parseInt(prompt("First number"))
    let operator = prompt("What do you want to do? (+-*/)")
    let valueTwo = parseInt(prompt("Second Number"))

    if (operator=="+") {
        let resultado = valueOne + valueTwo;
        document.getElementById("resultado").innerHTML= resultado.toString();
        document.getElementById("resultado2").value= resultado.toString();
    }
    else if (operator=="-") {
        let resultado = valueOne - valueTwo;
        document.getElementById("resultado").innerHTML= resultado.toString();
    }
    else if (operator=="*") {
        let resultado = valueOne * valueTwo;
        document.getElementById("resultado").innerHTML= resultado.toString();
    }
    else if (operator=="/"){
        let resultado = valueOne / valueTwo;
        document.getElementById("resultado").innerHTML= resultado.toString();
    }
}