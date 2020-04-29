<template>
  <div id="app">
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Footer
  }
};
</script>

<style lang="scss">
$background-color: #26262b;
$primary-color: #3cbc8d;
$primary-color-hover: rgb(51, 158, 119);
$background-color: #26262b;
$text-color: #fff;
$text-color-grey: rgb(122, 122, 122);
$label-color: rgb(145, 145, 145);
$font: "Roboto", sans-serif;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  a {
    color: $text-color;
  }

  a:visited {
    color: $text-color;
  }

  font-family: $font;
}

html {
  background-color: $background-color;
}
</style>
