<template>
  <v-main>
    <v-container>
      <v-col class="mb-4">
        <h1>Study Zhongwen - Zhuyin Review</h1>

        <p align="center">Learn Zhuyin through flashcards and games.</p>

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

        <ZhuyinCards />

        
      </v-col>
    </v-container>
  </v-main>
</template>

<script>
import ZhuyinCards from "./ZhuyinCards";
export default {
  name: "Zhuyin",

  components: {
    ZhuyinCards,
  },
};
</script>