<template>
  <div id="app">
    <CardSet timeunit="seconds"></CardSet>
  </div>
</template>

<script>
import CardSet from "../../CardSet";
import {zhuyinlist} from "./zhuyin-list.js";

export default {
  components: {
    CardSet,
  },
  data() {
    return {
      flashCards: zhuyinlist,

    };
  },
};
</script>

<style>
</style>