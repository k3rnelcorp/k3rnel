<template>
  <div class="inicio">
    <div class="h1">
      <Introduction 
        title="k3rnel" 
        subtitle="'Dedo no cu e tecnologia'" 
        description="Originalmente chamado de 3society" />
    </div>
  </div>
</template>

<script>
import Introduction from '../templates/Introduction'
export default {
  name: "inicio",
  components: {
    Introduction
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
</style>