<template>
  <div class="about">
    <h1>This is an about page</h1>
    <component v-for="type in types" :key="type" :is="type" />
  </div>
</template>
<script lang="ts">
import Name from "../components/Name.vue";
import Age from "../components/Age.vue";
export default {
  data: function () {
    return {
      types: ["Name", "Age"],
    };
  },
  components: {
    Name,
    Age,
  },
};
</script>