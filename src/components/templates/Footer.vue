<template>
  <div  class="footer defaultFont">
    <span>© 2020 k3rnel</span>
    <span>by <strong>clust<span class="blue">3</span>rr</strong>
    </span>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  box-sizing: border-box;
  width: 100%; 
  height: 48px;
  background-color: #1a1a1a;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 80px;
  padding-right: 80px;
}

.blue {
  color: #007bff;
}
</style>