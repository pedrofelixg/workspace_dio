function comparacao(num1, num2) {
    if (!num1 || !num2) {
        return "necessita de números válidos, maiores que 0.";
    }

    const firstStr = criaPrimeiraFrase(num1, num2);
    const secondStr = criaSegundaFrase(num1, num2);

    return `${firstStr} ${secondStr}`;
}

function criaPrimeiraFrase(num1, num2) {
    let primeiraFrase = `Os números ${num1} e ${num2}`;
    let confirm = 'não';

    if (num1 === num2) {
        confirm = "";
    }

    return `${primeiraFrase} ${confirm} são iguais. `;
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;
    let comparaDez = "menor";
    let comparaVinte = "menor";

    if (soma > 10) {
        comparaDez = "maior";
    }
    if (soma > 20) {
        comparaVinte = "maior";
    }

    return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(comparacao(1, 1));