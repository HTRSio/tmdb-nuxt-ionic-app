<script lang="ts" setup>
import {ref} from 'vue'
import type {PageResults, TvShows} from "~/types"
import {tvSharp} from "ionicons/icons";
import ListItem from "~/components/listItem.vue";

const page = ref<number>(1)
const totalPages = ref<number>(1)

const tvShows = ref<TvShows[]>([])

const firstSlug = ref<string>('tv')
const secondSlug = ref<string>('top_rated')
const changeSlugSelect = ref<boolean>(false)
const showSlugSelect = ref<boolean>(true)

const {data: list} = await useLazyAsyncData<PageResults<TvShows>>(
    "results",
    () =>
        $fetch(`/api/${firstSlug.value}/${secondSlug.value}/${page.value}`),
    {
        watch: [page, changeSlugSelect],
    }
);


watch(list, (list) => {
    if (list?.results) {
        list?.results.forEach((tvShow: TvShows) => {
            if (tvShow.poster_path) {
                tvShows.value.push(tvShow)
            }
        });
        totalPages.value = list.total_pages

    }

});

function checkPosterPath(posterPath: string | null): string {
    if (posterPath !== null) {
        return posterPath
    }
    return 'https://dummyimage.com/150x150/ffffff/000&text=TMDB'
}

function changeFirstSlug(query: string) {
    if (query.length < 3) {
        showSlugSelect.value = true
        return
    }
    showSlugSelect.value = false
    tvShows.value = []
    firstSlug.value = 'search_tv'
    secondSlug.value = query
    page.value = 1
    changeSlugSelect.value = !changeSlugSelect.value
}

function clearFirstSlug() {
    tvShows.value = []
    firstSlug.value = 'tv'
    secondSlug.value = 'top_rated'
    showSlugSelect.value = true
    page.value = 1
    changeSlugSelect.value = !changeSlugSelect.value
}


function changeSecondSlug() {
    tvShows.value = []
    firstSlug.value = 'tv'
    showSlugSelect.value = true
    page.value = 1
    changeSlugSelect.value = !changeSlugSelect.value
}

const ionInfinite = (ev: IonInfiniteCustomEvent) => {
    if (list.value !== null && totalPages.value > page.value + 1) {
        page.value++;
    }
    setTimeout(() => ev.target.complete(), 500);
};
</script>

<template>
    <div>
        <ion-list>
            <ion-item>
                <ion-searchbar @ionInput="changeFirstSlug($event.target.value.toLowerCase())"
                               @ionClear="clearFirstSlug()"></ion-searchbar>
                <ion-select aria-label="Change TV List" interface="popover" v-model="secondSlug" slot="end"
                            @ionChange="changeSecondSlug()"
                            v-show="showSlugSelect">
                    <ion-select-option value="airing_today">Now playing</ion-select-option>
                    <ion-select-option value="on_the_air">On the air</ion-select-option>
                    <ion-select-option value="top_rated">Top Rated</ion-select-option>
                    <ion-select-option value="popular">Popular</ion-select-option>
                </ion-select>
            </ion-item>
            <ion-item v-for="tvShow in tvShows" :key="tvShow.id" button detail :routerLink="`/tvshow/${tvShow.id}`">
                <ListItem :title="tvShow.name" :poster-path="checkPosterPath(tvShow.poster_path)"
                               :overview="tvShow.overview"/>
            </ion-item>
        </ion-list>
        <ion-infinite-scroll @ionInfinite="ionInfinite">
            <ion-infinite-scroll-content
                    loading-text="Please wait..."
                    loading-spinner="bubbles"
            >
            </ion-infinite-scroll-content>
        </ion-infinite-scroll>
    </div>
</template>

<style scoped></style>
