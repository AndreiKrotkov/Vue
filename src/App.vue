<template>
  <div id="app">
   <Header />
    <router-view />
  </div>
</template>

<script>
  import Header from "./components/Header";
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import "element-ui/lib/theme-chalk/index.css"

  export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Segoe UI, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
