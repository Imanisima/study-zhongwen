<template>
  <div id="app">
    <CardSet timeunit="seconds"></CardSet>
  </div>
</template>

<script>
import CardSet from "../../../CardSet";
import {level1list} from "./level1list.js";

export default {
  components: {
    CardSet,
  },
  data() {
    return {
      flashCards: level1list,

    };
  },
};
</script>

<style>
</style>