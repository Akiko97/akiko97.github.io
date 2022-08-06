<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Hello! Welcome to my homepage! <br />
      Get to know me from here. <br />
      <br />
      你好！欢迎来到我的个人主页！ <br />
      从这里开始了解我。 <br />
      <br />
      こんにちは！私のホームページへようこそ！ <br />
      ここから私を知りましょう。
      <br />
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
