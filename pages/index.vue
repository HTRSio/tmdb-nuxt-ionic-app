<script lang="ts" setup></script>

<template>
    <ion-page>
        <ion-content>
            <ion-tabs>
                <ion-router-outlet/>
                <ion-tab-bar slot="bottom">
                    <ion-tab-button tab="movies" href="/movies">
                        <ion-icon :icon="ioniconsVideocamOutline"/>
                        <ion-label>Movies</ion-label>
                    </ion-tab-button>

                    <ion-tab-button tab="tvshows" href="/tvshows">
                        <ion-icon :icon="ioniconsTvOutline"/>
                        <ion-label>TV</ion-label>
                    </ion-tab-button>

                    <ion-tab-button tab="series" href="/series">
                        <ion-icon :icon="ioniconsImagesOutline"/>
                        <ion-label>Series</ion-label>
                    </ion-tab-button>

                    <ion-tab-button tab="person" href="/persons">
                        <ion-icon :icon="ioniconsPersonOutline"/>
                        <ion-label>Persons</ion-label>
                    </ion-tab-button>

                </ion-tab-bar>
            </ion-tabs>
        </ion-content>
    </ion-page>
</template>

<style scoped></style>
