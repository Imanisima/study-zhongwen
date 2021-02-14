<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
        <router-link :to="card.loc" class="card-link">
          <v-card class="mx-auto card" max-width="100vh">
            <v-img class="white--text align-end" height="200px" :src="card.src">
              <v-card-title
                class="card-title"
                v-text="card.title"
              ></v-card-title>
            </v-img>

            <!-- <v-card-subtitle class="pb-0"  v-text="card.title"></v-card-subtitle> -->

            <v-card-text
              class="text--primary card-info"
              v-text="card.desc"
              align="center"
            >
            </v-card-text>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "HSK 1",
        desc: "test test test test",
        src: "/images/book.jpg",
        loc: "/Test",
        flex: 12,
      },
      {
        title: "HSK 2",
        desc: "test test test test",
        src: "/images/book.jpg",
        loc: "/Test",
        flex: 12,
      },
      {
        title: "HSK 3",
        desc: "test test test test",
        src: "/images/book.jpg",
        loc: "/Test",
        flex: 12,
      },
    ],
  }),
};
</script>

<style>
.card:hover {
  border: 2px solid rgb(202, 123, 136);
  text-decoration: none;
}

.card-title {
  color: #242424;
  text-align: center;
  font-size: 50px;
  font-family: "Big Shoulders Stencil Text", cursive;
}

.card-link {
    text-decoration: none;
}

.card-info {
  color: #242424;
  font-size: 18px;
  font-family: "Abel", sans-serif;
}
</style>