<template>
  <div id="app">
    <b-container>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <Greeting></Greeting>
      <Nasa></Nasa>
      <Weather></Weather>
      
    </b-container>
  </div>
</template>

<script>

import Greeting from './components/Greeting'
import Nasa from './components/Nasa'
import Weather from './components/Weather'
import storeWeather from './store/weather'


export default {
  name: 'App',
  store: storeWeather,
  components: {
    Greeting,
    Nasa,
    Weather,
    
  }
}
</script>


