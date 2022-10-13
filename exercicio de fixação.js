let array1=[1,2,3,4];

array1.push(5); //exercicio 1
array1.unshift(6);  //exercicio 2

console.log(array1);

function divisao(por3){                         //exercicio 3
    return ((por3 % 3) ==0)
}
let array2 = array1.filter(divisao);
console.log(array2);
 
function multiplica(valor){             //exercicio 4
    return valor *3;
}
let array3 = array2.map(multiplica);
console.log(array3);

function reducao(par1,par2){            //exercicio 5
    return par1 * par2;
}
let array4 = array3.reduce(reducao);
console.log(array4);
