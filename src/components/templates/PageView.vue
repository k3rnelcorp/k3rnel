<template>
  <div class="page">
      <div class="row">
          <router-view />
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.page {
    display: flex;
    justify-content: center;
    background-color: #24292e;
}

.row {
    display: flex;
    width: 70%;
    flex-direction: column;
    justify-content: center;
}
</style>