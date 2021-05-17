<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ name }}</div>
    <div>123</div>
    <component v-for="type in types" :key="type" :is="type" :args="123" />
  </div>
</template>
<script lang="ts">
/* eslint-disable vue/no-dupe-keys */
import Name from "../components/Name.vue"
import Age from "../components/Age.vue"
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data: function () {
    return {
      types: ["Name", "Age"],
      name: "monkey",
    }
  },
  components: {
    Name,
    Age,
  },
}
</script>
