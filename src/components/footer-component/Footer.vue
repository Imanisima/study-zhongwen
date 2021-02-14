<template>
  <v-footer dark padless>
    <v-card flat tile class="indigo lighten-1 white--text text-center">
      <v-img
        class="white--text align-end"
        height="15vh"
        width="280vh"
        gradient="to top right, rgba(40,2,52, 0.95), rgba(191,62,55, 0.60)"
        src="images/starry-sky.jpg"
      >
        <v-card-text>
          <v-btn
            v-for="footIcon in icons"
            :key="footIcon"
            class="mx-4 white--text icons"
            icon
          >
            <a class="link" target="_blank" :href="`${footIcon.path}`">
              <v-icon class="icons" size="24px">
                {{ footIcon.name }}
              </v-icon>
            </a>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }}
          <i class="fa fa-copyright" aria-hidden="true" />
          <strong>&nbsp; Imani Aza</strong>
        </v-card-text>
      </v-img>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",

  data: () => ({
    icons: [
      { name: "mdi-twitter", path: "https://twitter.com/imanisima_" },
      { name: "mdi-github", path: "https://github.com/imanisima" },
    ],
  }),
};
</script>

<style>
.icons {
  background-color: white;
  color: white;
}

.link {
  color: inherit;
  text-decoration: none;
}

.icons:hover {
  background-color: #d88b87;
}
</style>