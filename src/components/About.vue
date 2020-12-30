<template>
<body class="body-about">
  <section id="about-container">
    <div class="image-bg"></div>
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
  overflow-y: hidden;

  #main-container {
    margin: auto;
    max-width: 100vw;
    position: relative;
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

// Tablet -- Portrait
@media screen and (min-width: 768px) and (max-width: 1024px) {

  // About
  .body-about {
    min-height: 100%;
  }

  #about-content {
    flex-direction: column;
    height: 100%;
    padding: 1rem;

    .about-personal {
      flex-direction: column;
    }
    img {
      margin-top: 2rem;
    }

    .vertical-line {
      display: none;
    }

    .email {
      margin-bottom: 2rem;
    }

    .about-text {
      padding: 0 5rem;
      // Disable linebreaks with class="disable-mobile" to create
      // mobile-friendly paragraphs
      .disable-mobile {
        display: none;
      }
      .disable-tablet {
        display: none;
      }
    }
  }
}

// Smartphone -- Portrait
@media only screen and (min-width: 250px) and (max-width: 767px) {
  // About
  .body-about {
    height: 100%;
  }

  #about-content {
    flex-direction: column;
    height: 100%;
    padding: 1rem;

    .about-personal {
      flex-direction: column;
    }

    .vertical-line {
      display: none;
    }

    .email {
      margin-bottom: 2rem;
    }

    .about-text {
      // Disable linebreaks with class="disable-mobile" to create
      // mobile-friendly paragraphs
      .disable-mobile {
        display: none;
      }
    }
  }
}
</style>
