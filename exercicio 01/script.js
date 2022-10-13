function soma() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let res = document.getElementById("res");

    num1 = Number(num1);
    num2 = Number(num2);

    res.innerHTML = num1 + num2;
}
function subt() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let res = document.getElementById("res");

    num1 = Number(num1);
    num2 = Number(num2);

    res.innerHTML = num1 - num2;
}
function mult() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let res = document.getElementById("res");

    num1 = Number(num1);
    num2 = Number(num2);

    res.innerHTML = num1 * num2;
}
function div() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let res = document.getElementById("res");

    num1 = Number(num1);
    num2 = Number(num2);

    res.innerHTML = num1 / num2;
}
function exp() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let res = document.getElementById("res");

    num1 = Number(num1);
    num2 = Number(num2);

    res.innerHTML = num1 ** num2;
}