var numero = Math.floor(Math.random() * (10 - 0 + 1) + 0);
var tentativas = 3;

while (tentativas > 0) {
  var chute = parseInt(prompt("Qual número você quer chutar?"));

  if (chute === numero) {
    alert("Parabéns, você acertou!");
    break;
  } else {
    tentativas--;
    alert("Você errou. Restam " + tentativas + " tentativas.");
  }
}

if (tentativas === 0) {
  alert("Você não acertou. O número era " + numero);
}

