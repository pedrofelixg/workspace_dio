// Atividade Prática
function comparador(num1, num2) {
   (num1 == num2) ? (console.log("os números são iguais")) : (console.log("os números não são iguais"));

   const soma = num1 + num2;
   console.log("a soma dos números é ", soma);

   (soma <= 10) ? (console.log(" que é menor que 10")) : (console.log("que é maior que 10"));
   (soma <= 20) ? (console.log("e menor que 20")) : (console.log("e menor que 20"));
}

comparador(12, 5);