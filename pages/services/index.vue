<template>
  <div>
    <h1>Услуги</h1>
    <ul>
      <!-- <li v-for="(service, index) in services" :key="index">
        <a @click="openService(service.id)">{{service.text}}</a>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  async fetch({store}) {
    if (store.getters['services/services'].length === 0) {
      await store.dispatch('services/fetch')
    }
  },
  computed: {
    services() {
      return this.$store.getters['services/services']
    }
  },
  methods: {
    openService(serviceId) {
      this.$router.push(`/services/${serviceId}`)
    }
  }
}
</script>
