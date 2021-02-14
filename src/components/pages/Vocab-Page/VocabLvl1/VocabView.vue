<template>
  <v-main>
    <v-container>
      <v-col class="mb-4">
        <h1>Study Zhongwen - TOCFL Level 1 Review</h1>

        <p align="center">Vocabulary Review</p>

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

        <Level1Cards />

        
      </v-col>
    </v-container>
  </v-main>
</template>

<script>
import Level1Cards from "./Level1Cards";
export default {
  name: "VocabL1View",

  components: {
    Level1Cards,
  },
};
</script>