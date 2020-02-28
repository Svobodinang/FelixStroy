<template>
  <div>
    <h1>{{$route.params.serviceId}}</h1>
  </div>
</template>

<script>
export default {
  validate({params}) {
    return /^\d+$/.test(params.serviceId)
  }
}
</script>


