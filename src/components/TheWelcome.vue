<script setup>
import { RouterLink} from 'vue-router'
import Item from './Item.vue'
import PeopleIcon from './icons/IconPeople.vue'
import ResearchIcon from './icons/IconResearch.vue'
import HobbyIcon from './icons/IconHobby.vue'
import MailIcon from './icons/IconMail.vue'
</script>

<template>
  <Item>
    <template #icon>
      <PeopleIcon />
    </template>
    <template #heading>About me</template>
    Hometown: Beijing, China <br />
    Residence: Shinjuku-ku, Tokyo <br />
    Study: <br />
    <ul>
      <li>Undergraduate: Beijing University of Technology, Information Security</li>
      <li>Graduate: Waseda University, Ueda Lab</li>
    </ul>
  </Item>

  <Item>
    <template #icon>
      <ResearchIcon />
    </template>
    <template #heading>Research</template>
    Undergraduate: I worked on the security mechanism of Linux Kernel. <br />
    Graduate: I am working on the parallel computing for embedded devices. <br />
    <br />
    For details, please see 
    <RouterLink to="/research">Research</RouterLink>
    .
  </Item>

  <Item>
    <template #icon>
      <HobbyIcon />
    </template>
    <template #heading>Hobby</template>
    I love music and programming. <br />
    I am playing video game `Genshin Impact` recently. <br />
    And there are some interesting project for this game, see them in 
    <RouterLink to="/project">Project</RouterLink>
    .
  </Item>

  <Item>
    <template #icon>
      <MailIcon />
    </template>
    <template #heading>Contact with me</template>
    Mail [Powered by iCloud+]: 
    collies-04.venues
    <img alt="at" class="email" src="@/assets/at.svg" width="10" height="10" />
    icloud.com <br />
    or
    <br />
    <a target="_blank" href="https://t.me/akiko97">Telegram</a>
  </Item>
</template>
