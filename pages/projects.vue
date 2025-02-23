<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-8 dark:text-gray-100">{{ t('projects.title') }}</h1>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4 dark:text-gray-100">{{ t('projects.research.title') }}</h2>
      <div class="space-y-6">
        <div v-for="(item, index) in tm('projects.research.items')" :key="index" class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 class="text-xl font-semibold mb-2 dark:text-gray-100">{{ rt(item.title) }}</h3>
          <p class="text-l font-semibold mb-1 text-gray-500 dark:text-gray-500">{{ rt(item.language) }}</p>
          <p class="text-gray-700 dark:text-gray-300 mb-4">{{ rt(item.description) }}</p>
          <div v-if="rt(item.link)" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
            <a :href="rt(item.link)" target="_blank" rel="noopener">{{ t('projects.viewMore') }}</a>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4 dark:text-gray-100">{{ t('projects.personal.title') }}</h2>
      <div class="space-y-6">
        <div v-for="(item, index) in tm('projects.personal.items')" :key="index" class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 class="text-xl font-semibold mb-2 dark:text-gray-100">{{ rt(item.title) }}</h3>
          <p class="text-gray-700 dark:text-gray-300 mb-4">{{ rt(item.description) }}</p>
          <div v-if="rt(item.link)" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
            <a :href="rt(item.link)" target="_blank" rel="noopener">{{ t('projects.viewMore') }}</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const {t, tm, rt} = useI18n()
useHead({
  title: 'Projects',
})
</script>
