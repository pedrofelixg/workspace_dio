// COMPARADORES
var comp = "0" == 0; // compara valor - retorna true
var compType = "0" === 0; // compara tipo - retorna false
var dif = 1 != 2; // retorna true
var difType = 1 !== "1"; // retorna true

//OPERADORES ARITMÉTICOS (MATEMÁTICOS)
var soma = 1+1; // retorna 2 soma.
var sub = 1-1; // retorna 0.
var multi = 2*4 // 8.
var div = 9/3 // 3. é nesse operador que pode-se obter float.
var divInt = 5 % 2 // retorna 1, pois é o resto da divisão.
var potencia = 5 ** 2 // retorna 25.
var incrementar = 5++ // incrementa +1 a cada loop
var decrementa = 5-- // descresce -1 a cada loop

//OPERADORES RELACIONAIS
//consultam os operadores e retornam true ou false a partir da relação entre eles
if (8 < 6 ) // false
if (12 > 4) // true
if (raio >= 3.16) // true
if (fome <= sono) // undefined :)

//OPERADORES LÓGICOS
//consultam valores lógicos
var e = true && false // false
var ou = true || false // true
var falso = !true // false