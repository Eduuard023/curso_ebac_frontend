function multiplicar(a: number, b: number): number {
    return a * b;
}

function saudacao(nome: string): string {
    return `Olá, ${nome}`;
}

const resultadoMultiplicacao = multiplicar(3, 4);
const mensagemSaudacao = saudacao('Eduardo');

console.log(resultadoMultiplicacao);
console.log(mensagemSaudacao);     
