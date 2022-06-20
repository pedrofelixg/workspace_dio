function testeError(array, number) {
    try{
        if(!array && !number) throw new ReferenceError('Envie os Parâmetros!');
        if(typeof array !== 'object') throw new TypeError('Envie um elemento do tipo Array');
        if(typeof number !== 'number') throw new TypeError('Envie um elemento do tipo Number');

        if(array.length !== number) throw new RangeError('Tamanho do array inválido');
        return array;
    } catch (e) {
        if(e instanceof RangeError) {
            console.log('RangeError!');
            console.log(e.stack);
        } else if(e instanceof TypeError){
            console.log('TypeError');
            console.log(e.stack);
        } else if (e instanceof ReferenceError) {
            console.log('ReferenceError!');
            console.log(e.stack);
        } else {
            console.log('outro tipo de erro!');
            console.log(e.stack);
        }
    }
}

console.log(testeError([1,2,3], 0));