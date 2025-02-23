<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-8 dark:text-gray-100">{{ t('about.title') }}</h1>

    <section class="mb-8 flex gap-8">
      <div class="w-[60%]">
        <h2 class="text-2xl font-semibold mb-4 dark:text-gray-100">{{ t('about.basic.title') }}</h2>
        <ul class="list-disc pl-5 space-y-2">
          <li v-for="(item, index) in basic_info" :key="index" class="text-gray-700 dark:text-gray-300">
            {{ t(`about.basic.${item}.title`) }}: {{ t(`about.basic.${item}.content`) }}
          </li>
        </ul>
        <div class="mt-4 text-gray-700 dark:text-gray-300">
          Github:
          <a :href="t('about.basic.github')" target="_blank" rel="noopener"
                     class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
          {{ t('about.basic.github') }}
          </a>
        </div>
      </div>
      <div class="w-[40%] flex justify-center items-start">
        <img src="@/assets/images/avatar.png" alt="avatar" class="rounded-full w-48"/>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4 dark:text-gray-100">{{ t('about.education.title') }}</h2>
      <div class="space-y-6">
        <div v-for="(item, index) in tm('about.education.items')" :key="index"
             class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow relative">
          <span class="absolute top-2 right-2 text-lg text-white bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
            {{ rt(item.degree.content) }}
          </span>
          <h3 class="text-xl font-semibold mb-2 dark:text-gray-100">{{ rt(item.university.content) }}</h3>
          <p class="text-l font-semibold mb-1 text-gray-500 dark:text-gray-500">{{ rt(item.faculty.content) }}</p>
          <p class="text-l font-semibold mb-1 text-gray-500 dark:text-gray-500">{{ rt(item.department.content) }}</p>
          <p class="text-l font-semibold mb-1 text-gray-500 dark:text-gray-500">{{ rt(item.dates) }}</p>
          <ul class="list-disc pl-5 space-y-2 mt-4">
            <li class="text-gray-700 dark:text-gray-300">
              {{ rt(item.major.title) }}: {{ rt(item.major.content) }}
            </li>
            <li class="text-gray-700 dark:text-gray-300">
              {{ rt(item.laboratory.title) }}: {{ rt(item.laboratory.content) }}
            </li>
            <li class="text-gray-700 dark:text-gray-300">
              {{ rt(item.focus.title) }}: {{ rt(item.focus.content) }}
            </li>
          </ul>
          <p class="text-gray-700 dark:text-gray-300 mb-4">{{ item.description }}</p>
        </div>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4 dark:text-gray-100">{{ t('about.experience.title') }}</h2>
      <div class="space-y-6">
        <div v-for="(item, index) in tm('about.experience.items')" :key="index"
             class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div class="flex justify-between items-center mb-2">
            <h3 class="text-xl font-semibold dark:text-gray-100">{{ rt(item.job_title) }}</h3>
            <p class="text-l text-gray-500 dark:text-gray-500">{{ rt(item.dates) }}</p>
          </div>
          <p class="text-l font-semibold mb-1 text-gray-500 dark:text-gray-500">{{ rt(item.company) }}</p>
          <p class="text-l mb-1 text-gray-500 dark:text-gray-500">{{ rt(item.location) }}</p>
          <ul class="list-disc pl-5 space-y-2">
            <li class="text-gray-700 dark:text-gray-300" v-for="(info, index) in item.infos" :key="index">
              {{ rt(info) }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4 dark:text-gray-100">{{ t('about.skills.title') }}</h2>
      <div class="grid grid-cols-3 gap-4">
        <div v-for="(item, index) in tm('about.skills.items')" :key="index"
             class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 class="text-l font-semibold mb-2 dark:text-gray-100">{{ rt(item.title) }}:</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li class="text-gray-700 dark:text-gray-300" v-for="(ele, index) in item.items" :key="index">
              {{ rt(ele) }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4 dark:text-gray-100">{{ t('about.hobbies.title') }}</h2>
      <p class="text-gray-700 dark:text-gray-300 whitespace-pre-line">{{ t('about.hobbies.content') }}</p>
    </section>
  </div>
</template>

<script setup lang="ts">
const {t, tm, rt} = useI18n()
useHead({
  title: 'About',
})
const basic_info = [
  "name",
  "hometown",
  "previous_residence",
  "current_residence",
  "specialization",
  "language",
]
</script>
