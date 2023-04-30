<script lang="ts" setup>
import type {Movie} from "~/types";

const config = useRuntimeConfig();

const route = useRoute();
const id = route.params.id;

const {data: singleMovie}: { data: Movie } = await useFetch(
    `${config.public['apiUrl']}/movie/${id}`,
    {
        params: {
            api_key: config.public['apiKey'],
            language: config.public['apiLanguage'],
            append_to_response: 'videos,images,reviews,credits,similar'
        },
    }
);


</script>
<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title> {{ singleMovie.title }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-img
                    :src="`${config.public['imageUrl']}/w500${singleMovie.poster_path}`"
            ></ion-img>
            <p>{{ singleMovie.overview }}</p>
        </ion-content>
    </ion-page>
</template>
