<template>
  <div class="contato">
    <div class="formHeader">
      <p class="title">Fala garoto!</p>
    </div>
    <div class="logoContainer">
      <div class="logoBind">
        <img class="logoSpin" v-bind:src="logo" alt="logo" />
        <img class="chip" v-bind:src="chip" alt="chip" />
      </div>
    </div>
    <Form />
  </div>
</template>

<script>
import Form from "../templates/Form";
import logo from "../../assets/logoSemChip.png";
import chip from "../../assets/chip.png";
export default {
  components: {
    Form,
  },
  data() {
    return {
      logo,
      chip,
    };
  }
};
</script>

<style>
.formHeader .title {
  margin: 30px;
  font-size: 1.8rem;
  font-weight: 500;
  font-family: "JetBrainsMono";
  color: white;
}

.logoContainer {
  display: flex;
  justify-content: center;
}

.logoBind {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 200px;
  width: 200px;
}

.logoBind img {
  position: absolute;
}

.logoBind .logoSpin {
  width: 200px;
}

.logoBind .chip {
  width: 26px;
}

@media (prefers-reduced-motion: no-preference) {
  .logoSpin {
    animation: logoSpin infinite 5s linear;
  }
}

@keyframes logoSpin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>