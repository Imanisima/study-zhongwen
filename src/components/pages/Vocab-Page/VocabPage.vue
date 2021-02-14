<template>
  <v-main>
    <v-container>
      <v-col class="mb-4">
        <h1>Study Zhongwen - Vocabulary Review</h1>

        <p align="center">Choose a vocabulary set.</p>

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

        <VocabDeck />

        
      </v-col>
    </v-container>
  </v-main>
</template>

<script>
import VocabDeck from "./VocabDeck";
export default {
  name: "Vocabulary",

  components: {
    VocabDeck,
  },
};
</script>