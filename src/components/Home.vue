<template>
<body id="app" class="body-home">
  <section id="home-container">
    <nav id="navbar">
      <div class="logo">
        <router-link to="/">
          <img src="/img/logo-v1.png" alt="Home" />
        </router-link>
      </div>
      <ul>
        <li>
          <router-link to="/" class="active">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>

    <main>
      <header id="welcome">
        <h1>
          Hi! I'm
          <span>Richard</span> van Brunschot
        </h1>
        <h3>
          3D Environment
          <span>Artist</span>
        </h3>
      </header>

      <section id="home-content">
        <div class="grid-container">
          <!-- Loop over portfolioJSON object, creating a CSS grid element for each entry containing the correct vue-router link, image, overlay and project name -->
          <div
            class="grid-item"
            v-for="(project,portfolioLoop) in portfolioJSON"
            :key="portfolioLoop"
          >
            <!-- Dynamically generate vue-route based on portfolioJSON object -->
            <router-link :to="{path:project.routeName}">
              <img :src="project.imgSource" :alt="project.imgAlt" />
              <div class="grid-overlay">
                <div class="item-text">
                  <p>{{ project.projectName }}</p>
                </div>
              </div>
            </router-link>
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
    return {
      // JSON object containing all required vue-routes, image sources, image alts and project names
      portfolioJSON: [
        {
          routeName: "/projects/nomansland",
          imgSource: require("../../public/img/grid-container/richard-van-brunschot-no-mans-land-01.jpg"),
          imgAlt: "No Man's Land",
          projectName: "No Man's Land - VR"
        },
        {
          routeName: "/projects/mark1tank",
          imgSource: require("../../public/img/grid-container/richard-van-brunschot-mark1tank-01.jpg"),
          imgAlt: "Mark 1 Tank",
          projectName: "Mark 1 Tank - WW1"
        },
        {
          routeName: "/projects/nieuport11",
          imgSource: require("../../public/img/grid-container/richard-van-brunschot-nieuport11-01.jpg"),
          imgAlt: "Nieuport 11",
          projectName: "Nieuport 11 - WW1"
        },
        {
          routeName: "/projects/lantern",
          imgSource: require("../../public/img/grid-container/richard-van-brunschot-lantern-01.jpg"),
          imgAlt: "Lantern",
          projectName: "Lantern - WW1"
        },
        {
          routeName: "/projects/at4cs",
          imgSource: require("../../public/img/grid-container/richard-van-brunschot-at4-01.jpg"),
          imgAlt: "AT4-CS",
          projectName: "AT4-CS"
        },
        {
          routeName: "/projects/gloves",
          imgSource: require("../../public/img/grid-container/richard-van-brunschot-glove-01.jpg"),
          imgAlt: "Gloves",
          projectName: "Gloves - WW1"
        },
        {
          routeName: "/projects/stielhandgranate",
          imgSource: require("../../public/img/grid-container/richard-van-brunschot-stielhandgranate-01.jpg"),
          imgAlt: "Stielhandgranate",
          projectName: "Stielhandgranate WW1"
        },
        {
          routeName: "/projects/detonator",
          imgSource: require("../../public/img/grid-container/richard-van-brunschot-detonator-01.jpg"),
          imgAlt: "C4 Detonator",
          projectName: "C4 Detonator"
        },
        {
          routeName: "/projects/explosive",
          imgSource: require("../../public/img/grid-container/richard-van-brunschot-explosive-01.jpg"),
          imgAlt: "C4 Explosive",
          projectName: "C4 Explosive"
        }
      ]
    };
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
.body-home,
.body-message-sent {
  font-family: "Roboto", sans-serif;
  background-color: $background-color;
  color: $text-color;
  overflow-x: hidden;

  #main-container {
    margin: 0 auto;
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

// Welcome
#welcome,
#message-sent {
  text-align: center;
  animation: slide-in 0.75s ease-in-out;

  @keyframes slide-in {
    0% {
      transform: translateY(-400px);
    }
    100% {
      transform: translateY(0px);
    }
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  span {
    color: $primary-color;
  }

  h1 {
    font-size: 2.25rem;
    font-weight: 600;
    margin-top: 1rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom: 2rem;
  }
}

// Content - Home
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin: 0rem 6.25rem;

  .grid-item {
    position: relative;
  }

  img {
    width: 100%;
    cursor: pointer;
  }

  .grid-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    opacity: 0;
    transition: opacity 0.4s linear;
    font-size: 1.5rem;
    border-bottom: 3px $primary-color solid;
  }

  .grid-item:hover .grid-overlay {
    opacity: 1;
    cursor: pointer;
  }
}

.body-home {
  position: relative;
  padding-bottom: 2.5rem;
}

// Tablet -- Portrait
@media screen and (min-width: 768px) and (max-width: 1024px) {
  // Grid Container
  .grid-container {
    grid-template-columns: 1fr;
  }

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
  // Grid Container
  .grid-container {
    grid-template-columns: 1fr;
    margin: 0 1rem;
  }
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

  #welcome {
    h1 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1rem;
    }
  }
}
</style>
