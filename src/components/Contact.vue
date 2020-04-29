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
          <router-link to="/" >Home</router-link>
        </li>
        <li>
          <router-link to="/about" >About</router-link>
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
          <form name="contact" method="POST" data-netlify="true" action="/form-submit/success.html">
            <div class="textbox">
              <label for="name">Name</label>
              <input type="text" name="name" id="form-name" required />
            </div>
            <div class="textbox">
              <label for="email">Email</label>
              <input type="email" name="email" id="form-email" required />
            </div>
            <div class="message-box">
              <label for="message">Message</label>
              <textarea name="message" id="form-message" cols="35" rows="7" required></textarea>
            </div>
            <button type="submit" class="button-send">Send</button>
          </form>
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

  .form {
    margin-top: 100px;
    width: 500px;
    padding-bottom: 16rem;

    label {
      color: $label-color;
      font-size: 0.9rem;
      margin-bottom: 0.25rem;
    }

    h2 {
      color: #fff;
      margin-bottom: 2rem;
      font-size: 3.5rem;
      text-align: center;
    }

    .textbox input {
      background: none;
      border: 0.5px $primary-color solid;
      border-radius: 3px;
      width: 100%;
      height: 3rem;
      color: $text-color;
      margin-bottom: 0.75rem;
      margin-top: 0.2rem;
      font-size: 1rem;
      padding-left: 0.5rem;
    }

    input:focus,
    textarea:focus {
      outline: 1px solid rgb(62, 226, 166);
      border-color: $primary-color;
    }

    textarea {
      background: none;
      resize: none;
      width: 100%;
      border-radius: 3px;
      border: 0.5px $primary-color solid;
      font-family: $font;
      font-size: 1rem;
      padding-left: 0.5rem;
      padding-top: 0.4rem;
      margin-top: 0.2rem;
      color: $text-color;
    }

    .button-send {
      width: 100%;
      color: $text-color;
      background: $primary-color;
      border: none;
      border-radius: 3px;
      padding: 1rem;
      margin-top: 0.5rem;
      cursor: pointer;
      font-size: 1rem;

      &:hover {
        background: $primary-color-hover;
        transition-duration: 0.25s;
      }
    }
  }
}
</style>
