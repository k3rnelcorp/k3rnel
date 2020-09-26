<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from './components/Main'
export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style>
@font-face {
  font-family: "RobotoMono";
  src: url("./fonts/RobotoMono-Thin.ttf");
}

@font-face {
  font-family: "JetBrainsMono";
  src: url("./fonts/JetBrainsMono-Variable.ttf");
}

@import "~vue-snotify/styles/material.css";

* {
  margin: 0;
  box-sizing: border-box;
}

* .defaultFont {
  font-family: "RobotoMono", monospace;
}

#app {
  width: 100%;
  height: 100%;
}
</style>