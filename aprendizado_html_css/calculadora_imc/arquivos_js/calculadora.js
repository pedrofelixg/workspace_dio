/* const botao = document.getElementById("click");
botao.addEventListener("click", getValues);
 */
function getValues() {
    var nome = document.getElementById("name").value;
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    var pesoValue = peso;
    var alturaValue = altura;

    var imc = parseFloat(pesoValue/(alturaValue * alturaValue));
    var imcFixo = imc.toFixed(2);
    console.log(imc);

    if(imc <= 18.5) {
        alert('Você está abaixo do peso ideal');
        } else if(imc > 18.6, imc <= 24.9) {
            alert('Você está no peso ideal');
        } else if(imc >25.0, imc <= 29.9) {
            alert('Você está com sobrepeso');
        }  else if(imc > 30.0, imc <= 34.9) {
            alert('Você está com Obesidade I');
        } else if(imc > 35.0, imc <= 39.9) {
            alert('Você está com Obesidade II');
        } else if (imc < 40.0) {
            alert('Você está com Obesidade III');
    } else {
        alert("não consegui entender :(");
    }

    var notice = document.getElementById("notice");
    var calculo = "Olá " + nome + " Seu IMC é " + imcFixo;
    return notice.innerHTML = calculo;
}

// não entendo por que assim que clico em calcular o programa reinicia tão rápido, era pra recarregar só com a opção do navegador....