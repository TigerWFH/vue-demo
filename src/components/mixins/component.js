export const componentMixin = {
  props: {
    dataSource: {
      type: Object,
      required: true,
    },
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data: function () {
    return {
      realData: "mixins",
    }
  },
}
