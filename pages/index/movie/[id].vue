<script lang="ts" setup>
import type { Movie } from "~/types";
const config = useRuntimeConfig();
const route = useRoute();
const id = route.params.id;

const { data: movie } = await useAsyncData<Movie>("results", () =>
  $fetch(`/api/movie/${id}`)
);
</script>
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title> {{ movie.title }} </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-img
        :src="`${config.public.imageUrl}/w500${movie.poster_path}`"
      ></ion-img>
      <p>{{ movie.overview }}</p>
    </ion-content>
  </ion-page>
</template>
