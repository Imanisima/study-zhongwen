<template>
  <div id="app">
    <CardSet timeunit="seconds"></CardSet>
  </div>
</template>

<script>
import CardSet from "../../CardSet";
import {testlist} from "./testlist.js";

export default {
  components: {
    CardSet,
  },
  data() {
    return {
      flashCards: testlist,

    };
  },
};
</script>

<style>
</style>