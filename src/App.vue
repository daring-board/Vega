<template>
  <div id="app">
    <b-container>
      <b-row>
        <img class="top-img" src="./assets/toppage_1.png"/>
      </b-row>
        <Home
          msg="Welcome to Our Party"
        />
    </b-container>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}
.top-img{
  width: 100%;
  height: auto;
}
</style>
