<template>
  <div class="header">
    <span class="logo">
      <a href="/">
        <img src="../../assets/logo-dark.png" alt="logo" />
      </a>
    </span>
    <nav class="nav">
      <ul >
        <li>
          <a href="#inicio">Início</a>
        </li>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#contado">Contate-nos</a>
        </li>
      </ul>
    </nav>
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
  background-color: #1a1a1a;
}

.nav, ul {
  display: flex;
}

a{
  text-decoration: none;
  color: #fff;
}

ul > li {
  display: flex;
  align-items: center;
  margin-right: 50px;
  list-style: none;
}

.logo img {
  padding: 5px 20px;
  display: flex;
  height: 50px;
}
</style>