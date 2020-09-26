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
    flex: 1;
    min-height: calc(100vh - 48px - 53px);
    justify-content: center;
    background-color: #24292e;
}

.row {
    width: 70%;
}
</style>