<script lang="ts" setup>
definePageMeta({
    alias: ["/persons", "/index/persons"],
});
</script>

<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>
                    Persons
                </ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            Persons
        </ion-content>
    </ion-page>
</template>

<style scoped></style>
