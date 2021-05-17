<template>
  <div>
    <h1>Age Components</h1>
    <div>Age: {{ names }}</div>
    <div>Age: {{ realData }}</div>
  </div>
</template>
<script lang="ts">
import { componentMixin } from "./mixins/component"
export default {
  mixins: [componentMixin],
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data: function () {
    return {
      names: "names",
    }
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  created: function () {
    console.log("===>", this)
  },
}
</script>
