<template>
  <div>
    <h1>Age Components</h1>
    <div>Age: {{ names }}</div>
    <div>Age-mixin-realData: {{ realData }}</div>
    <div>Age: {{ gg }}</div>
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
      ...this.$props.dataSource,
    }
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  created: function () {
    console.log("props===>", this.$props.dataSource)
  },
}
</script>
