let x = 5;
let y = 8;
teste = true;

/*console.log(typeof(teste));
console.log(typeof(x));
console.log(typeof(y));
*/

while (teste){                         //while (teste=true) deu um bug gigantesco... ficou num loop infinito.
    x++;                        
    y++;
    teste=(x==15)?false:true;          //tinha esquecido de declarar o teste 
    teste=(y==16)?false:true;
        console.log(x);
        console.log(y)
    }


