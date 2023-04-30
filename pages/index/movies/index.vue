<script lang="ts" setup>

definePageMeta({
    alias: ["/", "/movies"],
});
</script>

<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title> Movies </ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <MovieList />
        </ion-content>
    </ion-page>
</template>

<style scoped></style>
