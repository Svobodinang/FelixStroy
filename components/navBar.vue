<template>
  <div>
    <!-- no-prefetch - прогружать страницу толко при переходе на нее -->
    <!-- exact - проверять только полное вхождение ссылки -->
    <nuxt-link exact no-prefetch active-class="active" to="/">Главная</nuxt-link>
    <nuxt-link exact active-class="active" to="/services">Услуги</nuxt-link>
  </div>
</template>

<style scoped>
.active {
  color: red;
}
</style>
