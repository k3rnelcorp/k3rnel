<template>
  <div class="main">
    <Header />
    <PageView />
    <Footer />
  </div>
</template>

<script>
import Header from "./templates/Header";
import Footer from "./templates/Footer";
import PageView from "./templates/PageView"
export default {
  name: "Main",
  components: {
    Header,
    Footer,
    PageView
  },
};
</script>

<style>

</style>