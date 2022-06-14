// método 1
function palidromo(string) {
    if(!string) return;
    var str1 = string.split("").reverse().join("")
    if (str1 === string) {
        console.log("é um palíndromo");
    }

}

palidromo("anna");

//método 2

function verificaPalindromo(string) {
    if (!string) return "string inexistente";

    for(let i = 0; i < string.lenght / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(verificaPalindromo("servo"));