function returnEvenValues(array) {
    let evenNums = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} não é par!`);
        }
    }
    console.log("os números pares são:", evenNums);
}

let array = [1, 2, 4, 5, 7, 8, 10, 11, 9, 16, 28, 31];

returnEvenValues(array);

var livrosLidos = [
    {título:'2666', autor:'Roberto Bolaño', pág:'856', editora:'Cia das Letras', ano:'2015'},
    {título:'Claroenigma', autor:'Carlos Drummond de Andrade', pág:'144', editora:'Cia das Letras', ano:'2018'},
    {título:'Os Miseráveis', autor:'Victor Hugo', pág:'1912', editora:'Penguin', ano:'2014'},
    {título:'Os Irmãos Karamazov', autor:'Fiódor Dostoiévski', pág:'1040', editora:'34', ano:'2008'}
]

console.table(livrosLidos);
