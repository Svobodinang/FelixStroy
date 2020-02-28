<template>
  <div>
    <h1>Услуги</h1>
    <ul>
      <li v-for="(service, index) in services" :key="index">
        <a @click="openService(service.name)">{{service.text}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    services: [
      {
        name: 'woodworking',
        text: 'Обработка по дереву'
      },
      {
        name: 'another',
        text: 'Другое'
      }
    ]
  }),
  methods: {
    openService(serviceName) {
      this.$router.push(`/services/${serviceName}`)
    }
  }
}
</script>
