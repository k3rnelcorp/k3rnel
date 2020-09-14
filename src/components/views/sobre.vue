<template>
  <div class="sobre">
    <div class="team">
      <div class="title">
        <h1>A Equipe</h1>
      </div>
      <Card
        class="member"
        nickname="clust3rr"
        ownName="Thiago Silva"
        url="https://www.linkedin.com/in/clust3rr/"
        menssage="O carinha do fone chiado e net lixo que tem um pc gamer top, mas não usa..."
        v-bind:image="Clust3rrPic"
        v-bind:isRight="false"
      />
      <Card
        class="member"
        nickname="d3coding"
        ownName="Mateus Junior"
        url="https://www.linkedin.com/in/d3coding/"
        menssage="Gasta o dinheiro com periféricos e comida (uma grande porcentagem)..."
        v-bind:image="D3codingPic"
        v-bind:isRight="true"
      />
      <Card
        class="member"
        nickname="d3cryptd"
        ownName="Lucas Araújo"
        url="https://www.linkedin.com/in/d3cryptd/"
        menssage="Gasta 90% do tempo formatando o próprio PC, nos outros 10%, está comendo o cu de quem ta lendo..."
        v-bind:image="D3cryptdPic"
        v-bind:isRight="false"
      />
      <Card
        class="member"
        nickname="manfram3"
        ownName="Maincon Colombo"
        url="https://www.linkedin.com/in/manfram3/"
        menssage="Desafia o corpo humano em atividades rotineiras e cansativas..."
        v-bind:image="Manfram3Pic"
        v-bind:isRight="true"
      />
    </div>
  </div>
</template>

<script>
import Card from "../templates/Card";

import Clust3rrPic from '../../assets/clust3rr.jpeg'
import D3codingPic from '../../assets/d3coding.jpeg'
import D3cryptdPic from '../../assets/d3cryptd.jpeg'
import Manfram3Pic from '../../assets/manfram3.jpeg'

export default {
  components: {
    Card,
  },
  data() {
    return {
      Clust3rrPic,
      D3codingPic,
      D3cryptdPic,
      Manfram3Pic
    };
  },
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route.params.username;
    },
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>

<style>
.team .member { 
  margin: 20px 0px;
}

.team {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title > h1 {
  color: white;
  margin-top: 30px;
  font-weight: 500;
  font-family: "JetBrainsMono";
}
</style>