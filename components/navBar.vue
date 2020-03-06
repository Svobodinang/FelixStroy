<template>
  <div class="top-menu w-100">
    <div
      class="d-flex justify-content-between align-items-center main-padding-y main-padding-x w-100"
    >
      <div class="logo">
        <img src="~/assets/logo/logo.svg" alt />
      </div>
      <div class="d-flex right-side justify-content-between">
        <menu>
          <nuxt-link exact no-prefetch active-class="active" to="/">главная</nuxt-link>
          <nuxt-link active-class="active" to="/services">услуги</nuxt-link>
          <nuxt-link exact active-class="active" to="/contacts">примеры работ</nuxt-link>
          <nuxt-link exact active-class="active" to="/">калькулятор</nuxt-link>
          <nuxt-link exact active-class="active" to="/">контакты</nuxt-link>
        </menu>
        <div class="info d-flex flex-column justify-content-start">
          <p class="number">8-800-555-35-35</p>
          <small>ежедневно с 10:00 до 19:00</small>
        </div>
      </div>
    </div>
    <!-- no-prefetch - прогружать страницу толко при переходе на нее -->
    <!-- exact - проверять только полное вхождение ссылки -->
  </div>
</template>

<style lang="scss" scoped>
.top-menu {
  background: $transparent;
  position: fixed;
  .right-side {
    width: 70%;
    menu {
      width: 70%;
      a:not(:last-child) {
        padding: 10px 0;
        &:not(:last-child) {
          margin-right: 5%;
        }
        &.active {
          color: $darkBrown;
          border-bottom: 1px solid $darkBrown;
        }
      }
    }
  }
}
</style>
