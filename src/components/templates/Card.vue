<template>
  <div
    v-bind:class="[{ card: true, left: !props.isRight, right: props.isRight }]"
  >
    <img class="image" v-bind:src="props.image" v-bind:alt="props.name" />
    <div class="about">
      <div class="nickContainer">
        <p class="nick">{{ props.nickname }}</p>
      </div>
      <div class="nameContainer">
        <p class="name">{{ props.name }}</p>
      </div>
      <div class="menssageContainer">
        <p class="menssage">{{ props.menssage }}</p>
      </div>
      <div class="linkContainer">
        <a class="link desktop" v-bind:href="props.url" target="_blank"
          >Linkedin</a
        >
        <a class="link mobile" v-bind:href="props.url" target="_blank">in</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nickname: String,
    image: String,
    url: String,
    name: String,
    menssage: String,
    isRight: Boolean,
  },
  data() {
    return { props: this.$props };
  },
};
</script>

<style>
.card {
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  max-width: 700px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
}

.card > .about p {
  font-family: "JetBrainsMono";
}

.image {
  height: 195px;
  width: 260px;
  object-fit: cover;
}

.about {
  width: 100%;
  padding: 15px 25px;
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: white;
  color: black;
  font-weight: 900;
}

.about a {
  color: royalblue;
}

.about .nick {
  font-size: 12px;
  opacity: 0.6;
}

.about .name {
  color: royalblue;
  font-size: 16px;
}

.about .menssage {
  margin-top: 8px;
  font-size: 14px;
  font-weight: 500;
}

.about .link {
  font-family: "JetBrainsMono";
  text-decoration: none;
  background-color: royalblue;
  color: white;
  padding: 12px 20px;
  border-radius: 26px;
  box-shadow: 0 16px 22px -17px #03153b;
}

.about .linkContainer {
  position: absolute;
  bottom: 20px;
  right: 20px;
}
.about .linkContainer .mobile {
  visibility: hidden;
}

.right .linkContainer {
  left: 20px;
}

.left {
  flex-direction: row;
}

.left p {
  float: left;
  text-align: left;
}

.right {
  flex-direction: row-reverse;
}

.right p {
  float: right;
  text-align: right;
}

@media (max-width: 580px) {
  .card {
    flex-direction: column;
    margin: 0 5px;
  }

  .about .linkContainer {
    top: 20px;
    right: 20px;
  }

  .about .linkContainer .desktop {
    visibility: collapse;
  }

  .about .linkContainer .mobile {
    visibility: visible;
    box-shadow: none;
    font-size: 1.1rem;
    padding: 4px 4px;
  }

  .right p {
    float: left;
    text-align: left;
  }

  .right .linkContainer {
    left: unset;
  }

  .image {
    height: 390px;
    width: 100%;
  }
}
</style>