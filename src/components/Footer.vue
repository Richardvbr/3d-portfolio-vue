<template>
  <footer id="footer">
    <div class="footer-line"></div>
    <p>&copy; Richard van Brunschot</p>
  </footer>
</template>

<script>
export default {
  name: "footer"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// Variables
$background-color: #26262b;
$text-color-grey: rgb(122, 122, 122);
$text-color: #fff;
$font: "Roboto", sans-serif;

// Footer
#footer {
  margin: 0 0 1.5rem 0;
  position: relative;
  // bottom: 0;
  width: 100%;

  .footer-line {
    height: 1px;
    text-align: center;
    width: 88.8vw;
    background-color: $text-color-grey;
    margin: auto;
  }

  p {
    margin-top: 0.5rem;
    color: $text-color-grey;
    text-align: center;
    font-size: 0.8rem;
  }
}
</style>
