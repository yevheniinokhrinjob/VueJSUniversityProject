<template>
  <div id="app">
    <div id="nav">
      <Navigation/>

    </div>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  }
}
</script>

<style lang="css">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-top: 30px;
  padding-bottom: 30px;

}

a {
  font-weight: bold;
  color: #2c3e50;

}


</style>
