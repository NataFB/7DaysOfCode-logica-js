const pergunta1 = prompt ("Qual área você gostaria de seguir? front-end ou back-end");
if(pergunta1 === "front-end"){
    prompt("Qual das duas opções você escolheria para Front-End? Aprender React ou aprender Vue.");
}else if(pergunta1 === "back-end"){
    prompt ("Qual das duas opções você escolheria para Back-End? Aprender C# ou aprender Java.");
} else {
    alert("Você não inseriu uma área válida!");
}

const pergunta2 = prompt ("Gostaria de seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar fullstack");

if(pergunta2 === "especializando"){
    alert("Se especializar para se tornar cada vez melhor na área é uma ótima escolha!");
} else if (pergunta2 === "fullstack"){
    alert("Se tornar um fullstack é dificil, porém é uma ótima escolha! Te desejo sucesso!");
} else {
    alert("Você não inseriu uma área válida!");
}


const pergunta3 = prompt("Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer?");

const msg = `${pergunta3} é muito bom, Boa sorte!`;
alert(msg);

for (let qual = 0; qual < 3; qual++) {
       const escolha = prompt("Tem mais alguma tecnologia que você gostaria de aprender?");
        const msg2 = `${escolha} é uma excelente escolha, Boa sorte!`;
        alert(msg2);
}
