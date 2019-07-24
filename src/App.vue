<template>
  <div id="app">
    <b-container>
      <b-row>
        <img class="top-img" src="./assets/toppage_3.png"/>
      </b-row>
        <HelloWorld
          msg="Welcome to Our Party"
        />
    </b-container>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

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
  /* background-image: url("./assets/toppage_3.png");
  background-size:80% auto; */
}
.top-img{
  width: auto;
  height: 90vh;
}
</style>
