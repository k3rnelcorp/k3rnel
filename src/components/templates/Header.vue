<template>
  <div class="header">
    <img class="logo" src="../../assets/logo-dark.png" alt="logo">
    <Nav />
    <div class="containerButton defaultFont">
        <button class="defaultFont button github" v-on:click="openLink('https://github.com/k3rnelcorp')">GitHub</button>
        <button class="defaultFont button discord" v-on:click="openLink('https://discord.com/')">Discord</button>
    </div>
  </div>
</template>

<script>
import Nav from './Nav'
export default {
  name: "Header",
  components: {
    Nav
  }, 
  methods: {
    openLink(url) {
      window.open(url)
    }
  }
};
</script>

<style>
.header {
  display: flex;
  align-items: center;
  background-color: #1a1a1a;
}
.logo a {
  display: flex;
}
.logo {
  padding: 8px 80px;
  max-height: 53px;
}

.containerButton .button{
  margin-right: 0px;
  border-radius: 0.25rem;
  color: #ffffff;
  font-weight: 600;
  border: none;
  font-size: 1.1rem;
  padding: 0.575rem 0.75rem;
  outline: none;
  cursor: pointer;
  margin-right: 40px;
}
.containerButton .discord {
  background-color: #7289da;
}
.containerButton .github {
  background-color: #24292e;
}
.containerButton {
  position: absolute;
  right: 0px;
  margin-right: 40px;
}
.discord:hover {
  background-color: #637fe7;
}
.github:hover {
  background-color: #2e2f30;
}
</style>