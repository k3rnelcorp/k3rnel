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

* {
  font-family: "RobotoMono", monospace;
  margin: 0;
}

</style>
