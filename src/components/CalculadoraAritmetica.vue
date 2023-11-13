<template>
    <div>
        <NumeroInput label="Número 1" :valor="numero1" @atualizar-calculo="atualizarNumero1" />
        <OperacaoSelect :operacao="operacao" @atualizar-calculo="atualizarOperacao" />
        <NumeroInput label="Número 2" :valor="numero2" @atualizar-calculo="atualizarNumero2" />

        <div>
            <h3>Resultado: {{ calcularResultado() }}</h3>
        </div>
    </div>
</template>

<script>
import NumeroInput from "./NumeroInput";
import OperacaoSelect from "./OperacaoSelect";

export default {
    components: {
        NumeroInput,
        OperacaoSelect,
    },
    data() {
        return {
            numero1: 0,
            numero2: 0,
            operacao: "+",
        };
    },
    methods: {
        atualizarNumero1(valor) {
            this.numero1 = Number(valor);
        },
        atualizarOperacao(operacao) {
            this.operacao = operacao;
        },
        atualizarNumero2(valor) {
            this.numero2 = Number(valor);
        },
        calcularResultado() {
            switch (this.operacao) {
                case "+":
                    return this.numero1 + this.numero2;
                case "-":
                    return this.numero1 - this.numero2;
                case "*":
                    return this.numero1 * this.numero2;
                case "/":
                    return this.numero1 / this.numero2;
                default:
                    return 0;
            }
        },
    },
};
</script>

<style scoped>
</style>

