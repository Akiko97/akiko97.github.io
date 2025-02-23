<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-8 dark:text-gray-100">{{ t('contact.title') }}</h1>

    <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">{{ t('contact.description') }}</p>

      <div class="space-y-6">
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 dark:text-gray-400 mr-3" fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <a :href="'mailto:' + email"
             class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
            {{ email_split[0] }}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                 class="inline-block h-[1em] w-[1em] align-text-bottom">
              <path class="fill-current"
                    d="M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z"/>
            </svg>
            {{ email_split[1] }}
          </a>
        </div>

        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 dark:text-gray-400 mr-3" fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
          </svg>
          <a :href="'https://t.me/' + t('contact.telegram')" target="_blank" rel="noopener"
             class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
            Telegram @{{ t('contact.telegram') }}
          </a>
        </div>

        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 dark:text-gray-400 mr-3" fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
          </svg>
          <span class="text-gray-700 dark:text-gray-300">Discord @{{ t('contact.discord') }}</span>
        </div>
      </div>
    </div>

    <span class="absolute bottom-2 right-2 text-xs text-white bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
      {{ t('contact.email_intro') }}
    </span>
  </div>
</template>

<script setup lang="ts">
const {t} = useI18n()
useHead({
  title: 'Contact',
})
const email = t('contact.email').replace("$at$", "@")
const email_split = email.split('@')
</script>
