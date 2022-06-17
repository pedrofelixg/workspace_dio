const people = {
    nome: 'Pedro',
    idade: 25,
};

const student = {
    nome: 'Rejane',
    idade: 11,
};

function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

console.log(calculaIdade.call(student, 7));