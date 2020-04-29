<template>
<body class="body-about">
  <section id="about-container">
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
          <router-link to="/about" class="active">About</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>

    <main>
      <section id="about-content">
        <div class="about-personal">
          <img src="/img/richard-van-brunschot.jpg" alt="richard-van-brunschot" />
          <p class="first-name">
            <span>Richard</span> van Brunschot
          </p>
          <p class="last-name">
            3D Environment
            <span>Artist</span>
          </p>
          <div class="personal-line-horizontal"></div>
          <p class="city">
            Veldhoven,
            <span>Netherlands</span>
          </p>
          <p class="email">Richardvanbrunschot@gmail.com</p>
        </div>
        <div class="vertical-line"></div>
        <div class="about-text">
          <div class="about-summary">
            <h3>Summary</h3>
            <p>
              3D artist with a passion for creating art that pushes
              storytelling.
              <br class="disable-mobile" />Strong background in
              creating high-end 3D models for realtime content such as
              <br class="disable-mobile" />videogames and VR using industry
              standard software.
            </p>
            <br />
          </div>
          <div class="about-skills about-margin">
            <h3>Skills</h3>
            <p>3D Modeling | Texture Baking | Texturing | Lighting | Rendering</p>
            <br />
          </div>
          <div class="about-software about-margin">
            <h3>Software</h3>
            <p>
              Autodesk Maya | ZBrush | Substance Suite | Photoshop | Marmoset
              <br class="disable-mobile" />Arnold | V-Ray | Unity | Unreal Engine
              4
            </p>
            <br />
          </div>
          <div class="about-projects about-margin">
            <h3>Projects</h3>
            <p>
              No Man's Land - I was the main 3D artist for my graduation
              project,
              <br class="disable-mobile" />“No Man’s Land”, an
              interactive and immersive virtual reality experience
              <br class="disable-mobile" />set in the trenches of WW1. I was
              responsible for directing, design, 3D
              <br class="disable-mobile" />modeling, texturing and lighting.
              <br />
              <br />Squad - I was part of the modding team (40+ people) that created
              the
              <br class="disable-mobile" />‘’French Foreign Legion’’ mod for
              the first-person shooter ‘’Squad’’. While
              <br class="disable-tablet" />part of the team, I created several
              assets that play a key role within the
              <br class="disable-mobile" />mod. I also supervised the 3D team consisting of 20 artists.
            </p>
          </div>
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
.body-about {
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

// Content - About
.body-about {
  background: url("/img/bg/richard-van-brunschot-no-mans-land-01.png") no-repeat
    center center/cover;
  background-color: $background-color;
  height: 100vh;
  overflow: hidden;
}
#about-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-bottom: 8rem;

  .about-personal {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.25;
  }

  img {
    max-width: 175px;
    border-radius: 50%;
    margin-bottom: 1rem;
  }

  .first-name {
    font-size: 1.35rem;

    span {
      color: $primary-color;
    }
  }
  .last-name {
    span {
      color: $primary-color;
    }
  }
  .city {
    font-size: 0.9rem;

    span {
      color: $primary-color;
    }
  }
  .email {
    font-size: 0.9rem;
  }

  .personal-line-horizontal {
    width: 200px;
    height: 1px;
    border: none;
    background-color: $text-color-grey;
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
  }

  .vertical-line {
    height: 600px;
    border: none;
    margin: 0 2rem;
    width: 1px;
    background-color: $primary-color;
  }

  .about-text {
    line-height: 1.25;
  }

  h3 {
    color: $primary-color;
    margin-bottom: 0.25rem;
  }

  .about-margin {
    margin-top: 0.75rem;
  }
}

// Footer
.body-about {
  position: relative;
  padding-bottom: 5rem;
}
</style>
