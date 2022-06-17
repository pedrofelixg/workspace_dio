function calculaIMC() {
    let peso = document.getElementById('peso').value;
    let pesoNum = peso;

    let altura = document.getElementById('altura').value;
    let alturaNum = altura;

    let imc = parseFloat(pesoNum/(alturaNum * alturaNum));
    let imcFixo = imc.toFixed(2);
    console.log("Seu imc é:" + imc.toFixed(2));

    function comparativo(){
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
        return
    }

    function mensagem() {
        const nome = document.getElementById('name').value;
        let notice = document.getElementById('notice');
    
        let mensagem = `Olá ${nome} seu IMC é ${imcFixo}`;
        return notice.innerHTML = mensagem;
    }

    comparativo();
    mensagem();
    return
}

const botao = document.getElementById('click');
botao.addEventListener('click', calculaIMC);