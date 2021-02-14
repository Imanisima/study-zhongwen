<template>
  <v-main>
    <v-container>
      <v-col class="mb-4">
        <h1>Study Zhongwen - Grammar Review</h1>

        <p align="center">Review grammar and sentence construction.</p>

        <!-- pop-up alert -->
        <v-alert
          align="center"
          v-model="alert"
          dismissible
          color="#d88b87"
          dark
          :value="true"
          icon="fas fa-exclamation-circle"
        >
          This is currently in dev phase!
        </v-alert>

        <GramWiki />

        
      </v-col>
    </v-container>
  </v-main>
</template>

<script>
import GramWiki from "./GramWiki";
export default {
  name: "GramPage",

  components: {
    GramWiki,
  },
};
</script>