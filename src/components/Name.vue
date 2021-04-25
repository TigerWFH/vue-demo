<template>
  <h1>Name Components {{args}}</h1>
</template>
<script lang="ts">
  export default {
    props: {
      args: {
        type: String
      }
    }
  }
</script>