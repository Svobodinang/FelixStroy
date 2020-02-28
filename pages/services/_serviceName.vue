<template>
  <div>
    <h1>{{$route.params.serviceName}}</h1>
  </div>
</template>

<script>
export default {
  validate({params}) {
    return /^\w+$/.test(params.serviceName)
  }
}
</script>


