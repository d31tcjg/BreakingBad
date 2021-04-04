<template>
  <h1>Details Page for {{ params.character }}</h1>
  <ul>
    <li v-for="image in images" :key="image.char_id">
      Occupation:
      {{ image.occupation }}
    </li>
    <li v-for="image in images" :key="image.char_id">
      Actor: {{ image.portrayed }}
    </li>
    <li v-for="image in images" :key="image.char_id">
      Status: {{ image.status }}
    </li>
    <li v-for="image in images" :key="image.char_id">
      Nickname: {{ image.nickname }}
    </li>
    <li v-for="image in images" :key="image.char_id">
      Birthday: {{ image.birthday }}
    </li>
    <li v-for="image in images" :key="image.char_id">
      Appearances in seasons: {{ image.appearance }}
    </li>
    <li v-for="image in images" :key="image.char_id">
      Category: {{ image.category }}
    </li>
  </ul>
  <router-link to="/"> Go Back </router-link>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { images, getDetails } from "../helprs/useAPI";

const { params } = useRoute();

onMounted(() => {
  getDetails(params.character);
});
</script>
