<template>
  <div class="header">
    <div class="logo">
      <a href="/">
        <img src="../../assets/logo-dark-48px.png" alt="logo" />
      </a>
    </div>
    <nav class="nav">
      <ul>
        <li>
          <a href="/inicio">Início</a>
        </li>
        <li>
          <a href="/sobre">Sobre</a>
        </li>
        <li>
          <a href="/contado">Contate-nos</a>
        </li>
      </ul>
    </nav>
    <div class="containerButton">
      <a href="https://github.com/k3rnelcorp" target="_blank">
        <button class="button github">GitHub</button>
      </a>
      <a href="https://discord.com/" target="_blank">
        <button class="button discord">Discord</button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
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

.logo img {
  padding: 15px 80px;
  max-height: 55px;
}

.nav a {
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
}

.nav {
  width: 100vw;
  position: absolute;
  display: flex;
  justify-content: center;
}

.nav ul {
  display: flex;
  list-style: none;
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

ul > li {
  margin-right: 50px;
}

</style>