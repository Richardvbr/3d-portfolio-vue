<template>
<body class="body-navbar">
  <div class="image-bg"></div>
  <nav id="navbar">
    <div class="logo">
      <router-link to="/">
        <img src="/img/logo-v1.png" alt="Home" />
      </router-link>
    </div>
    <ul>
      <li>
        <router-link to="/" exact-active-class="active">Home</router-link>
      </li>
      <li>
        <router-link to="/about" exact-active-class="active">About</router-link>
      </li>
      <li>
        <router-link to="/contact" exact-active-class="active">Contact</router-link>
      </li>
    </ul>
  </nav>
</body>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  name: "Navbar"
};
</script>

<style scoped lang="scss">
// Variables
$primary-color: #3cbc8d;
$primary-color-hover: rgb(51, 158, 119);
$background-color: #26262b;
$text-color: #fff;
$text-color-grey: rgb(122, 122, 122);
$label-color: rgb(145, 145, 145);
$font: "Roboto", sans-serif;

body,
.body-navbar {
  font-family: "Roboto", sans-serif;
  background-color: $background-color;
  color: $text-color;
  overflow-y: hidden;
  overflow-x: hidden;
}

// Navbar
#navbar {
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  
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

// Tablet -- Portrait
@media screen and (min-width: 768px) and (max-width: 1024px) {
  // Navbar
  #navbar {
    justify-content: center;
    padding-top: 1rem;

    .logo img {
      display: none;
    }

    ul {
      margin: 0;
    }

    li a {
      margin-left: 0rem;
    }
  }
}

// Smartphone -- Portrait
@media only screen and (min-width: 250px) and (max-width: 767px) {
  // Navbar
  #navbar {
    justify-content: center;
    padding-top: 1rem;

    .logo img {
      display: none;
    }

    ul {
      margin: 0;
    }

    li a {
      margin-left: 0rem;
    }
  }
}
</style>
