<template>
<body class="body-message-sent">
  <section id="message-sent-container">
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
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>

    <header id="message-sent">
      <h1>
        <span>Thanks!</span>
      </h1>
      <h3>Your message was sent successfully</h3>
      <router-link to="/">Go back to the homepage</router-link>
    </header>
  </section>
</body>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  name: "MessageSent"
};
</script>

<style scoped lang="scss">
$primary-color: #3cbc8d;

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

#message-sent {
  a {
    transition: 0.25s ease-in-out;
  }

  a:hover {
    color: $primary-color;
  }
}
</style>