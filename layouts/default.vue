// Используется по умолчанию
<template>
  <div>
    <navBar />

    <main>
      <div>
        <!-- nuxt like vue router  -->
        <nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import navBar from "@/components/navBar"

export default {
  components: {
    navBar
  }
}
</script>

<style>
</style>
