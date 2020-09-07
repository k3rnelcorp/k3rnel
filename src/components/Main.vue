<template>
  <div class="main">
    <Header />
    <div class="test"></div>
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
div .main {
    box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.test {
  height: 1500px;
}
</style>