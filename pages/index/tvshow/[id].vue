<script lang="ts" setup>
import type { TvShow } from "~/types";
const config = useRuntimeConfig();
const route = useRoute();
const id = route.params.id;

const { data: tvShow } = await useAsyncData<TvShow>("results", () =>
  $fetch(`/api/tvshow/${id}`)
);
</script>
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title> {{ tvShow.name }} </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-img
        :src="`${config.public.imageUrl}/w500${tvShow.poster_path}`"
      ></ion-img>
      <p>{{ tvShow.overview }}</p>
    </ion-content>
  </ion-page>
</template>
