<template>
  <h1>Breaking Bad</h1>
  <p v-if="loading">Loading...</p>
  <ul v-else>
    <li v-for="character in characters" :key="character">
      <router-link :to="`/${character.name}`"
        >{{ character.name }}
      </router-link>
    </li>
  </ul>
  <router-link to="/">Home</router-link>
  <router-link to="/cesar">Details</router-link>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { characters, loading, getCharacters } from "../helprs/useAPI";

onMounted(() => {
  getCharacters();
});
</script>
