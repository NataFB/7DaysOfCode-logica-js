function adicionar(){
    let pergunta2 = parseInt(prompt("Quantos números você deseja adicionar?"));
    let numeros = [];
    for(i = 0; i < pergunta2; i++){
       let pergunta3 = parseInt(prompt("Adicione o número"));
        numeros.push(pergunta3); 
    }
    return numeros
}

function soma(){
    let numeros = adicionar();
    let somar = 0;
    for(let i = 0; i < numeros.length; i++){
        somar += numeros[i];
    }
    alert(`O resultado da multiplicação é: ${somar}`);
}

function subtracao(){
    let numeros = adicionar();
    let subtrai = 0;
    for(let i = 0; i < numeros.length; i++){
        subtrai -= numeros[i];
    }
    alert(`O resultado da multiplicação é: ${subtrai}`);
}

function multiplica(){
    let numeros = adicionar();
    let multiplicar = 0;
    for(let i = 0; i < numeros.length; i++){
        multiplicar *= numeros[i];
    }
    alert(`O resultado da multiplicação é: ${multiplicar}`);
}

function divide(){
    let numeros = adicionar();
    let divid = 0;
    for(let i = 0; i < numeros.length; i++){
        divid /= numeros[i];
    }
    alert(`O resultado da multiplicação é: ${divid}`);
}


let calcular = "sim"
while(calcular != "não"){
    calcular = prompt("Você gostaria de calcular algo? digite: 'sim' ou 'não'");
    let pergunta = prompt("Escolha uma das opções: 'somar' 'subtrair' 'multiplicar' ou 'dividir'? ou digite 'não' para sair");
    
    
    if(pergunta === 'não'){
        break;
    }

    if(pergunta === 'somar'){
        soma();
    }else if (pergunta === 'subtrair'){
        subtracao();
    }else if (pergunta === 'multiplicar'){
        multiplica();
    }else if (pergunta === 'dividir'){
        divide();
    }else{
        alert("Operação não reconhecida!");
    }

}
    alert("Até a próxima");







