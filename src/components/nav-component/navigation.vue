<template>
<div>
    <v-app-bar
  app
  color="#d88b87"
  dark
>
  <template v-slot:img="{ props }">
    <v-img
      v-bind="props"
      gradient="to bottom left, rgba(40,2,52, 0.95), rgba(40,2,52, 0.5)"
    ></v-img>
  </template>

  <div class="d-flex align-center">
    <router-link to="/" text>
      <h2 class="enlarge-brand">
        <i class="fa fa-book" aria-hidden="true" /> Study Zhongwen
      </h2>
    </router-link>
  </div>

  <v-spacer></v-spacer>

  <div class="route-links">
        <router-link to="/" text>
          <span class="mr-2 enlarge">Home</span>
        </router-link>

  </div>
</v-app-bar>
</div>
</template>

<script>

export default {
  name: "Navigation",
}
</script>

<style>
.enlarge {
  padding: 8px 10px;
  color:#fff;

  /* #72bcd4 */
}

.enlarge-brand {
  color:#fff;
}

.mr-2 {
  font-family: "Big Shoulders Stencil Text", cursive;
  font-size: 25px;
  font-weight: bold;
}

.enlarge-brand:hover,
.mr-2:hover {
  color: #e9a19c;
}
</style>