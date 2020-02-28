<template>
  <div>
    <div class="d-flex justify-content-between align-items-center">
      <div class="logo">
        <img src="~/assets/logo/logo.svg" alt />
      </div>
      <div class="d-flex">
        <menu>
          <nuxt-link exact no-prefetch active-class="active" to="/">Главная</nuxt-link>
          <nuxt-link active-class="active" to="/services">Услуги</nuxt-link>
          <nuxt-link exact active-class="active" to="/contacts">Контакты</nuxt-link>
        </menu>
        <div class="info">
          <p class="number">8-800-555-35-35</p>
          <p>ежедневно с 10:00 до 19:00</p>
        </div>
      </div>
    </div>
    <!-- no-prefetch - прогружать страницу толко при переходе на нее -->
    <!-- exact - проверять только полное вхождение ссылки -->
  </div>
</template>

<style lang="less" scoped>
menu {
  color: @veryDarkGrey;
}
</style>
