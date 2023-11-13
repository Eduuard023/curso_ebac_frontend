<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Calculadora />
  </div>
</template>

<script>
import Calculadora from "@/components/CalculadoraAritmetica";

export default {
  name: "App",
  components: {
    Calculadora,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img{
  height: 200px;
  width: 200px;
  margin-bottom: 24px;
}
</style>
