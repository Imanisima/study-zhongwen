<template>
  <v-app>
    <Navigation />
    <router-view></router-view>
    <Footer />
  </v-app>
</template>



<script>
import Navigation from "./components/nav-component/navigation";
import Footer from "./components/footer-component/Footer";

export default {
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style>
h1,
h2 {
  color: #242424;
  text-align: center;
  font-family: "Big Shoulders Stencil Text", cursive;
}

small,
p {
  color: #242424;
  font-size: 18px;
  font-family: "Abel", sans-serif;
}
</style>
