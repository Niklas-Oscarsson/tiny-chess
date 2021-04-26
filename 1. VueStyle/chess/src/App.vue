<template>
  <div>
    <h1>Wellcome</h1>
    <chess></chess>
  </div>
</template>

<script>
import chess from './components/Chess/chess.vue'

export default {
  name: 'App',
  components: {
    chess
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
