<script lang="ts" setup>
import {ref} from 'vue'
import type {PageResults, Movies} from "~/types"
import ListItem from "~/components/listItem.vue";

const config = useRuntimeConfig()

const page = ref<number>(1)
const totalPages = ref<number>(1)

const movies = ref<Movies[]>([])


const firstSlug = ref<string>('movie')
const secondSlug = ref<string>('top_rated')
const query = ref<string>('')


const changeSlugSelect = ref<boolean>(false)
const showSlugSelect = ref<boolean>(true)

const {data: list} : {data: PageResults<Movies>} = await useLazyAsyncData(
    "results",
    () =>
        $fetch(`${config.public['apiUrl']}/${firstSlug.value}/${secondSlug.value}`,
            {
                params: {
                    api_key: config.public['apiKey'],
                    language: config.public['apiLanguage'],
                    query: query.value,
                    page: page.value
                },
            }
        ),
    {
        watch: [page, changeSlugSelect],
    }
);


watch(list, (list: PageResults<Movies>) => {
    if (list?.results) {
        list?.results.forEach((movie: Movies) => {
            if (movie.poster_path) {
                movies.value.push(movie)
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

function changeFirstSlug(searchText: string) {
    if (searchText.length < 3) {
        showSlugSelect.value = true
        return
    }
    showSlugSelect.value = false
    movies.value = []
    firstSlug.value = 'search'
    secondSlug.value = 'movie'
    query.value = searchText
    page.value = 1
    changeSlugSelect.value = !changeSlugSelect.value
}

function clearFirstSlug() {
    movies.value = []
    firstSlug.value = 'movie'
    secondSlug.value = 'top_rated'
    query.value = ''
    showSlugSelect.value = true
    page.value = 1
    changeSlugSelect.value = !changeSlugSelect.value
}


function changeSecondSlug() {
    movies.value = []
    firstSlug.value = 'movie'
    showSlugSelect.value = true
    page.value = 1
    changeSlugSelect.value = !changeSlugSelect.value
}

const ionInfinite = (ev: IonInfiniteCustomEvent) => {
    if (totalPages.value > page.value + 1) {
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
                <ion-select aria-label="Change Movie List" interface="popover" v-model="secondSlug" slot="end"
                            @ionChange="changeSecondSlug()"
                            v-show="showSlugSelect">
                    <ion-select-option value="now_playing">Now Playing</ion-select-option>
                    <ion-select-option value="popular">Popular</ion-select-option>
                    <ion-select-option value="top_rated">Top Rated</ion-select-option>
                    <ion-select-option value="upcoming">Upcoming</ion-select-option>
                </ion-select>
            </ion-item>
            <ion-item v-for="movie in movies" :key="movie.id" button detail :routerLink="`/movie/${movie.id}`">
                <ListItem :title="movie.title" :poster-path="checkPosterPath(movie.poster_path)"
                          :overview="movie.overview"/>
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
