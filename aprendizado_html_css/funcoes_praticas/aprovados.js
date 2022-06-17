const alunos = [
    {nome:'Julia', nota: 6},
    {nome:'Raquel', nota: 4},
    {nome:'Murilo', nota: 5},
    {nome:'Anna', nota: 10},
    {nome:'Jean', nota: 3},
    {nome:'Flavio', nota: 7}
];

function alunosAprovados(array, media){
    let aprovados = [];
    for(let i = 0; i < alunos.length; i++) {
        let {nota, nome} = alunos[i];
        if(nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 6));
