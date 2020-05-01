<template>
<body class="body-contact">
  <section id="contact-container">
    <div class="image-bg"></div>
    <nav id="navbar">
      <div class="logo">
        <router-link to="/">
          <img src="/img/logo-v1.png" alt="Home" />
        </router-link>
      </div>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/contact" class="active">Contact</router-link>
        </li>
      </ul>
    </nav>

    <main>
      <section id="contact-content">
        <div class="form">
          <h2>Let's connect</h2>
          <p>Feel free to send me an email at</p>
          <p>
            <a href="mailto:richardvanbrunschot@gmail.com">Richardvanbrunschot@gmail.com</a>
          </p>
        </div>
      </section>
    </main>
  </section>
</body>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  name: "home"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// Variables
$primary-color: #3cbc8d;
$primary-color-hover: rgb(51, 158, 119);
$background-color: #26262b;
$text-color: #fff;
$text-color-grey: rgb(122, 122, 122);
$label-color: rgb(145, 145, 145);
$font: "Roboto", sans-serif;

// Main body
body,
.body-contact {
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
// Content - Contact
.body-contact {
  background: url("/img/bg/richard-van-brunschot-no-mans-land-03.png") no-repeat
    center center/cover;
  background-color: $background-color;
  height: 100vh;
  overflow: hidden;
}
#contact-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-bottom: 7.5rem;

  .form {
    margin-top: 100px;
    width: 500px;
    padding-bottom: 16rem;
    text-align: center;

    :nth-child(2) {
      font-size: 1.25rem;
      margin-bottom: 0.25rem
    }

    h2 {
      color: #fff;
      margin-bottom: 4rem;
      font-size: 3.5rem;
    }
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

  // Contact
  .body-contact {
    #contact-content {
      .form {
        margin-top: 2rem;

        h2 {
          font-size: 4rem;
        }
      }
      form {
        width: 500px;
        margin: auto;
      }
    }
  }
}

// Tablet -- Landscape

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

  // Contact
  .body-contact {
    #contact-content {
      margin-top: 1rem;
      overflow: hidden;
      .form {
        form {
          width: 250px;
          margin: auto;
        }

        h2 {
          font-size: 3rem;
          margin-top: 1rem;
        }
      }
    }
  }
}

// Smartphone -- Landscape
</style>
