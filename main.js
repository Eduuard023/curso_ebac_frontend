const alunos = [
    { nome: '', nota: 0 },
    { nome: '', nota: 0 },
    { nome: '', nota: 0 },
    { nome: '', nota: 0 },
    { nome: '', nota: 0 },
];

const alunosComNota = alunos.map(aluno => {
    const nomeAluno = prompt('Digite o nome do aluno');
    const notaAluno = parseFloat(prompt(`Digite a nota do aluno ${nomeAluno}`));

    return {
        nome: nomeAluno,
        nota: notaAluno
    };
}).filter(aluno => aluno.nota >= 6);

console.log(alunosComNota);