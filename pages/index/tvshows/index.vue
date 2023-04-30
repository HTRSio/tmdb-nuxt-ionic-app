<script lang="ts" setup>
import TvShowList from "~/components/tvShowList.vue";

definePageMeta({
    alias: ["/tvshows", '/tvshows'],
});
</script>

<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>
                    TV
                </ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <TvShowList />
        </ion-content>
    </ion-page>
</template>

<style scoped></style>
