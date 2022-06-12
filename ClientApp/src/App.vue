<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

const getRequest = async () =>
  console.log(await axios.get('/api/weatherforecast'))
</script>

<template>
  <img class="m-auto" alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <!-- Uncomment the below router-view tag to use vue-router -->
  <!-- <router-view /> -->
  <button @click.prevent="getRequest">Click me</button>
</template>
