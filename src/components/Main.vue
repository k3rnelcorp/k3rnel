<template>
  <div class="main">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./templates/Header";
import Footer from "./templates/Footer";
export default {
  name: "Main",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
</style>