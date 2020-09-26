<template>
  <div class="main">
    <Header />
    <PageView />
    <Footer />
    <vue-snotify></vue-snotify>
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
.main {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>