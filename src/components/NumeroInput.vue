<template>
    <div>
        <label>{{ label }}</label>
        <input :value="valor" @input="atualizarCalculo" type="number" />
    </div>
</template>

<script>
export default {
    props: {
        label: String,
        valor: Number,
    },
    methods: {
        atualizarCalculo(event) {
            this.$emit("atualizar-calculo", event.target.value);
        },
    },
};
</script>
