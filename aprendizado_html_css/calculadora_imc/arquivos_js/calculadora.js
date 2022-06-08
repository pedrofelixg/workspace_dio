// about calculo

var nome = 'Pedro';
var peso = 75.50; // get element html
var altura = 1.69; // get element html

var imc = peso / (altura * altura);

if(imc <= 18.5) {
    alert('Você esta abaixo do peso ideal');
    if (imc > 18.5, imc <= 24) {
        alert('Você está no peso ideal');
        if (imc > 24, imc <=29.9) {
            alert('Você está com excesso de peso');
        } else {
            alert('Você esta com algum grau de obesidade');
        }
    }
}

console.log(nome);
console.log(imc);

console.log("Olá", nome, "seu peso ideal é:", imc);

/* passos da lógica
1 -> capturar nome
2 -> capturar peso
3 -> capturar altura
4 -> calcular imc = p(a*a)
5 -> devolver a str = "Olá fulano seu imc é xx.xx, você está no xxxxxxx(peso ideal/fora/acima)"
6 -> apresentar tabela com os cálculos
7 -> href com o link para fonte.
*/