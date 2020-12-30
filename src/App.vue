<template>
  <div id="app">
    <Navbar />
    <transition name="page-transition-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Footer,
    Navbar
  }
};
</script>


<style lang="scss">
// Vue page transitions
.page-transition-fade-enter-active,
.page-transition-fade-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease;
}

.page-transition-fade-enter,
.page-transition-fade-leave-to {
  opacity: 0;
}

.page-transition-fade-enter-to,
.page-transition-fade-leave {
  opacity: 1;
}

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
