let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";

let adicionarMais = "sim";
while(adicionarMais != "não" && adicionarMais != "remover"){
    adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não' ou se deseja remover algum item da lista responda'remover'");
    while (adicionarMais != "sim" && adicionarMais != "não" && adicionarMais != "remover") {
	alert(`Operação não reconhecida!`);
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não' ou se deseja remover algum item da lista responda'remover'");
    }
	
    if (adicionarMais === "não"){ 
        break;
    }

    while (adicionarMais === "remover"){
        alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);
        let comidaRemove = prompt("Qual comida você deseja remover?");
        let categoriaRemove = prompt(" Em qual categoria você deseja remover essa comida? 'frutas', 'laticínios', 'doces' ou 'congelados'?");
        if(categoriaRemove === 'frutas'){
            let achar = frutas.indexOf(comidaRemove);
            frutas.splice(achar, 1);
            if(achar == -1){
                alert("Não foi possível encontrar o item dentro da lista!")
            }
        }else if(categoriaRemove === 'laticínios'){
            let achar = laticínios.indexOf(comidaRemove);
            laticínios.splice(achar, 1);
            if(achar == -1){
                alert("Não foi possível encontrar o item dentro da lista!")
            }
        }else if(categoriaRemove === 'doces'){
            let achar = doces.indexOf(comidaRemove);
            doces.splice(achar, 1);
            if(achar == -1){
                alert("Não foi possível encontrar o item dentro da lista!")
            }
        }else if(categoriaRemove === 'congelados'){
            let achar = congelados.indexOf(comidaRemove);
            congelados.splice(achar, 1);
            if(achar == -1){
                alert("Não foi possível encontrar o item dentro da lista!")
            }
        } else {
            alert("Essa categoria não foi pré-definida.");
        }
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não' ou se deseja remover algum item da lista responda'remover'");
    }

    comida = prompt("Qual comida você deseja inserir?");
    categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
    if(categoria === 'frutas'){
        frutas.push(comida);
    } else if (categoria === 'laticínios'){
        laticinios.push(comida);
    } else if (categoria === 'doces'){
        doces.push(comida);
    } else if (categoria === 'congelados'){
        congelados.push(comida);
    } else {
        alert("Essa categoria não foi pré-definida.")
    }    
}
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);



