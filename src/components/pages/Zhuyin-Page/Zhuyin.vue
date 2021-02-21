<template>
  <v-main>
    <v-container>
      <v-col class="mb-4">
        <h1>Study Zhongwen - Zhuyin</h1>

        <p align="center">Learn Zhuyin through flashcards and games.</p>

        <p align="center"> Zhuyin or Bopomofo is the Mandarin phonetic system used in Taiwan. It is the counterpart to China's simplified pinyin and used with traditional characters.
          It is predominantly taught while learning to initially read and write characters. Outside of standard mandarin, it is used in Taiwanese Hokkien and Cantonese. <br>

          You can also download the Zhuyin input method onto your computer or smartphone.
        </p>

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