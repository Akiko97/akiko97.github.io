<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <nav class="bg-white dark:bg-gray-800 shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center space-x-4">
            <NuxtLink
                to="/"
                class="px-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-200 font-semibold"
            >
              {{ t("nav.home") }}
            </NuxtLink>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NuxtLink
                  to="/about"
                  class="px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
              >
                {{ t("nav.about") }}
              </NuxtLink>
              <NuxtLink
                  to="/projects"
                  class="px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
              >
                {{ t("nav.projects") }}
              </NuxtLink>
              <NuxtLink
                  to="/contact"
                  class="px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
              >
                {{ t("nav.contact") }}
              </NuxtLink>
            </div>
          </div>
          <div class="flex items-center">
            <button
                @click="toggleDark()"
                class="p-2 rounded-md text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <SunIcon v-if="isDark" class="h-5 w-5" />
              <MoonIcon v-else class="h-5 w-5" />
            </button>

            <select
                v-model="locale"
                @change="setLocale(locale)"
                class="rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            >
              <option
                  v-for="locale in locales"
                  :key="locale.code"
                  :value="locale.code"
              >
                {{ locale.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <NuxtPage/>
    </main>
  </div>
</template>

<script setup lang="ts">
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'

const {t, locale, locales, setLocale} = useI18n()

const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: ''
})
const toggleDark = useToggle(isDark)
</script>
