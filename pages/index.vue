<template>
  <div class="text-center py-16">
    <div class="relative mx-auto w-fit mb-8">
      <img src="@/assets/images/fuji.png" alt="Mount Fuji" class="max-w-2xl w-full rounded-lg shadow-lg"/>
      <span class="absolute bottom-2 right-2 text-xs text-white bg-black/25 px-2 py-1 rounded backdrop-blur-sm">
        {{ t('home.image') }}
      </span>
    </div>
    <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
      {{ t('home.welcome') }}
    </h1>
    <p class="text-xl text-gray-600 dark:text-gray-400 mb-16">
      {{ t('home.subtitle') }}
    </p>
    <blockquote class="text-2xl italic text-gray-700 dark:text-gray-300 mx-auto max-w-3xl whitespace-pre-line">
      {{ t('home.quote') }}
    </blockquote>
  </div>
</template>

<script setup lang="ts">
const {t} = useI18n()
useHead({
  title: 'Home',
})
</script>
