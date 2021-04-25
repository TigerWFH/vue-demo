<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <span>
      {{message}}
    </span>
    <span>
      {{this.msg}}
    </span>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "../components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  /*
    var mixin = {
      data: function() {
        return {}
      },
      created: function() {

      }
    }
    new Vue({
      ------数据-------------
      data: {},
      props: {},
      propsData: {},
      computed: {},
      methods: {},
      watch: {},
      ------DOM-------------
      el: "",
      template: "",
      render: function(){},
      renderError: function() {},
      ------生命周期钩子-------------
      beforeCreate: function() {},
      created: funtion() {},
      beforeMount: function(){},
      mounted: function(){},
      beforeUpdate: function() {},
      Updated: function() {},
      activated: function() {},
      deactivated: function() {},
      beforeDestroy: function() {},
      destroyed: function() {},
      errorCaptured: function() {}
      ------资源-------------
      directives: {},
      filters: {},
      components: {},
      ------组合-------------
      parent: Vue instance,
      mixins: [mixin],
      extends: {} || Function,
      provide/inject:
      ------其他-------------
      name: string,
      delimiters: Array<string>,
      functional: "无状态组件",
      model: "",
      inheritAttrs: "",
      comments: ""
    })
    -------------------------vue instance--------------
    ------property------
    vm.$data
    vm.$props
    vm.$el
    vm.$options
    vm.$parent
    vm.$root
    vm.$children
    vm.$slots
    vm.$scopedSlots
    vm.$refs
    vm.$isServer
    vm.$attrs
    vm.$listens
    ------数据------
    vm.$watch
    vm.$set
    vm.$delete
    ------事件------
    vm.$on
    vm.$once
    vm.$off
    vm.$emit
    vm.$
    ------生命周期------
    vm.$mount
    vm.$forceUpdate
    vm.$nextTick
    vm.$destroy
  */ 
  // data
  message = "Hello World!";
  // methods
  getMessage() {
    return this.message
  }
  // computed
  get msg() {
    return this.message + "-strong"
  }
  // lifecycle
  created() {
    console.log("created=====>")
  }
}
</script>
