<template>
  <PageList />
</template>

<script>
import PageList from "./components/PageList.vue";

export default {
  name: "App",
  components: {
    PageList
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  h1 {
    text-align: center;
  }
}
</style>
