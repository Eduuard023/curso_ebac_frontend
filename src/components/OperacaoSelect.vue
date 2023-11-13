<template>
    <div>
        <label>Operação</label>
        <select :value="operacao" @change="atualizarCalculo">
            <option value="+">Soma</option>
            <option value="-">Subtração</option>
            <option value="*">Multiplicação</option>
            <option value="/">Divisão</option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        operacao: String,
    },
    methods: {
        atualizarCalculo(event) {
            this.$emit("atualizar-calculo", event.target.value);
        },
    },
};
</script>
