<script lang="ts" setup>
const config = useRuntimeConfig();

const props = defineProps({
    id: {
        type: Number,
        require: true,
    },
    title: {
        type: String,
        default: '',
    },
    posterPath: {
        type: String,
        require: true
    },
    overview: {
        type: String,
        default: ''
    }

})

</script>

<template>
    <ion-thumbnail slot="start">
        <img
                :alt="title"
                :src="`${config.imageUrl}/w500${posterPath}`"
        />
    </ion-thumbnail>
    <ion-label>
        <h3 class="ion-text-uppercase">{{ title }}</h3>
        <p>{{ overview }}</p>
    </ion-label>
</template>

<style lang="scss" scoped>
ion-thumbnail {
  --size: 70px;
  --border-radius: 14px;
  @media screen and (min-width: 768px) {
    --size: 140px;
  }
}

ion-label {

  h3 {
    font-size: 0.8rem;
    font-weight: bold;
    @media screen and (min-width: 768px) {
      font-size: 1.2rem;
    }
  }


  p {
    font-size: 16px;
  }
}
</style>
