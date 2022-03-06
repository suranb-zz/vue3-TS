<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
//import HelloWorld from './components/HelloWorld.vue'
import Cards from './components/Cards.vue'
import RequestTable from './components/RequestTable.vue'
import Phone from './components/Phone.vue'
</script>

<template>
  <Phone></Phone>

  <h1>922 168 36</h1>
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <hr>
  <Cards ></Cards>
  <hr class="bottom-hr">
  <RequestTable></RequestTable>
</template>

<style>

hr { 
  border: 0; 
  height: 1px; 
  background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
  background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
  background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
  background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); 
}
#app {
  font-family: Avenir, 'Roboto', sans-serif;
  font-size: 1.2em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
