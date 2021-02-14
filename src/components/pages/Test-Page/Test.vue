<template>
  <v-main>
    <v-container>
      <v-col class="mb-4">
        <h1>Study Zhongwen</h1>

        <p align="center">Flashcards and games for studying Mandarin Chinese.</p>

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

        <!-- flashcard deck -->
        <TestCards />
        <!-- end of deck -->
      </v-col>
    </v-container>
  </v-main>
</template>

<script>
import TestCards from "./TestCards";
export default {
  name: "Test",

  components: {
    TestCards,
  },
};
</script>