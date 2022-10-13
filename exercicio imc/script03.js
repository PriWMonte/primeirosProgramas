let peso = Number(prompt("Digite o seu peso!"));
let altura = Number(prompt("Digite a sua altura!"));
let imc = peso/(altura*altura);

    if (imc <= 18.50){
        alert(imc);
        alert(`Abaixo do peso`);
    } else if (imc <= 25){
        alert(imc);
        alert(`Normal`);
    }else if (imc <= 30){
        alert(imc);
        alert(`Sobrepeso`);
    }else if (imc <= 35){
        alert(imc);
        alert(`Obesidade I`);
    } else {
        alert(imc);
        alert(`Obesidade II`);
    }






