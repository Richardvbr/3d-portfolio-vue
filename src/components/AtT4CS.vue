<template>
<body class="body-project">
  <section id="project-container">
    <nav id="navbar">
      <div class="logo">
        <router-link to="/">
          <img src="../../public/img/logo-v1.png" alt="Home" />
        </router-link>
      </div>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="active">About</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>

    <section id="project-content">
      <h1>AT4 - CS</h1>
      <p>3D Modeling | Texture Baking | Texturing | Lighting | Rendering</p>
      <p>Autodesk Maya | Substance Painter | V-Ray</p>
      <p>13k Triangles - 4K Textures</p>
      <img src="/img/at4/richard-van-brunschot-at4-01.jpg" alt="AT4 - CS" />
      <img src="/img/at4/richard-van-brunschot-at4-02.jpg" alt="AT4 - CS" />
      <img src="/img/at4/richard-van-brunschot-at4-03.jpg" alt="AT4 - CS" />
      <img src="/img/at4/richard-van-brunschot-at4-04.jpg" alt="AT4 - CS" />
      <img src="/img/at4/richard-van-brunschot-at4-05.jpg" alt="AT4 - CS" />
      <img src="/img/at4/richard-van-brunschot-at4-06.jpg" alt="AT4 - CS" />
      <img src="/img/at4/richard-van-brunschot-at4-07.jpg" alt="AT4 - CS" />
      <img src="/img/at4/richard-van-brunschot-at4-08.jpg" alt="AT4 - CS" />
      <img src="/img/at4/richard-van-brunschot-at4-09.jpg" alt="AT4 - CS" />
      <img src="/img/at4/richard-van-brunschot-at4-10.jpg" alt="AT4 - CS" />
      <img src="/img/at4/richard-van-brunschot-at4-11.jpg" alt="AT4 - CS" />
      <img src="/img/at4/richard-van-brunschot-at4-12.jpg" alt="AT4 - CS" />
    </section>
  </section>
</body>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  name: "at4cs"
};
</script>

<style scoped lang="scss">
// Variables
$primary-color: #3cbc8d;
$background-color: #26262b;
$text-color: #fff;
$font: "Roboto", sans-serif;

// Main body
body,
.body-project {
  font-family: "Roboto", sans-serif;
  background-color: $background-color;
  color: $text-color;
  overflow-x: hidden;

  #main-container {
    margin: auto;
    max-width: 100vw;
    position: relative;
  }
}

// Navbar
#navbar {
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  padding-top: 1.5rem;

  .logo img {
    max-width: 35px;
    margin: 3px 0 0 6.25rem;
    z-index: 1;
    position: relative;
    transition: transform 0.25s;

    &:hover {
      transform: scale(1.15);
    }
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin-right: 5.5rem;
    z-index: 2;
  }

  li a {
    color: $text-color;
    text-decoration: none;
    padding: 0.5rem 0.75rem;
    margin-left: 1rem;
    font-size: 1.05rem;
    transition: border-bottom 0.2s ease-in-out;
    height: 1rem;
    position: relative;
  }

  li a.active {
    color: $primary-color;
  }

  li a:after {
    content: "";
    position: absolute;
    background-color: $primary-color;
    height: 3px;
    width: 0%;
    transform: translateX(-50%);
    left: 50%;
    bottom: 0;
    transition: 0.35s ease;
  }

  li a:hover:after {
    width: 50%;
  }
}

// Content - Project
#project-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 0.35rem;
    color: $primary-color;
  }

  p {
    max-width: 35%;
    margin: 0.1rem 0;
    color: $text-color;
  }

  img {
    margin-top: 2.25rem;
    width: 75vw;
  }
}

// Footer
.body-project {
  position: relative;
  padding-bottom: 5rem;
}
</style>
