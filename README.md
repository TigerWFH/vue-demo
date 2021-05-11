# vue-demo

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Vue 基础知识

> Vue 是一套用于构建用户界面的渐进式框架。Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层。
> 一个 Vue 应用会将其挂载到一个 DOM 元素上然后对其进行完全控制。那个 HTML 是我们的入口，但其余都会发生在新创建的 Vue 实例内部。

### Vue 组件化应用构建

> 组件系统是 Vue 的另一个重要概念，因为它是一种抽象，允许我们使用小型、独立和通常可复用的组件构建大型应用。
> 在 Vue 里，一个组件本质上是一个拥有 预定义选项 的一个 Vue 实例
> 一个 Vue 应用由一个通过 new Vue 创建的根 Vue 实例，以及可选的嵌套的、可复用的组件树(也是 Vue 实例)组成

#### Vue 实例：每个 Vue 应用都是通过创建一个 Vue 实例开始的

```js
var vue = new Vue(options)

/*
    options.data：会被加入到Vue的响应式系统中。只有当实例被创建时就已经存在于 data 中的 property 才是响应式的。Object.freeze()可以阻止数据的追踪。
    options.method：
    options.computed：计算属性，处理和property关联的复杂逻辑，封装成函数形式。计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。计算属性默认只有 getter，不过在需要时你也可以提供一个 setter
    options.watch：侦听属性，更通用的方式来观察和响应 Vue 实例上的数据变动。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。

    vue实例property和方法，以$开头

    生命周期：
        beforeCreate
        created
        beforeMount
        mounted
        beforeUpdate
        updated
        beforeDestroy
        destroyed
*/
```

#### Vue 组件

- `组件示例：`组件是可复用的 Vue 实例，且带有一个名字

```js
// Vue组件示例,其本质依然是Vue实例
Vue.component("button-counter", {
  data: function () {
    return {
      description: "响应式数据域，组件只接受function。应用可以是对象",
    }
  },
  template: "<button>XXX</button>",
})
// 引用组件:button-counter，每用一次，创建一个新实例
var vm = new Vue({
  el: "#app",
  data: {},
  template: "
  <div>\
  <button-counter>XXX</button-counter>\
  <button-counter>XXX</button-counter>\
  </div>",
})
```

- `组件模板写法：`

```js
/*
        1、字符串形式：{
            template: ""
        }
        2、单文件形式：*.vue
        3、HTML借用script标签方式
            <script type="text/x-template">
            </script>
    */
```

- `组件通过props属性向子组件传递数据：props大小写有坑`
- `props可以是string[], 也可以是{property: type}`

```js
Vue.component("button-counter", {
  props: ["title"],
  template: "",
})
```

- `每个组件必须只有一个根元素`
- `监听子组件事件方式：Vue自定义系统`

```js
/*
        父组件通过"v-on"监听任意子组件自定义事件名，并通过$event接收参数
        子组件通过$emit方法，触发自定义事件，$emit(event-name, params)
    */
```

- `通过slot分发内容：`children

- `动态和异步组件：`Vue 提供了 component 这个标签，并提供了 is 属性。Vue 提供了 keep-alive 标签

```js
/*
        keep-alive: 主要用于保留组件状态或避免重新渲染
            include:字符串或正则表达式，白名单
            exclude: 字符串或正则表达式，黑名单
            max: 数字，最多可以缓存多少组实例
        component：渲染一个元组件为动态组件。根据is的值，决定渲染的组件
            is：
            inline-template：boolean
        transition：过渡效果
        transition-group：
        slot：元素作为组件模板之中的内容分发插槽
*/
<component v-bind:is="XXX"></component>
```

- `全局祖册：Vue.component(name, options)：`

```js
Vue.component("name", {
  data: function () {
    return {}
  },
})
```

- `局部注册：`

```js
var ComponentA = {}
var ComponentB = {}

// 在components选项中定义要使用的组件
new Vue({
  el: "#app",
  components: {
    "component-a": ComponentA,
    "component-b": ComponentB,
  },
})
```

### Vue 全局 API

- `Vue.extend(options)：`使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象
- `Vue.nextTick([callback, context])：`在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM
- `Vue.set(target, propertyName/index, value)：`向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新
- `Vue.delete(target, property/index, value)：`删除对象的 property。如果对象是响应式的，确保删除能触发更新视图。这个方法主要用于避开 Vue 不能检测到 property 被删除的限制，但是你应该很少会使用它
- `Vue.directive(id[, definition])：`注册或获取全局指令
- `Vue.filter(id[, definition])：`注册或获取全局过滤器
- `Vue.component(id[, definition])：`注册或获取全局组件
- `Vue.use(plugin)：`使用vue插件
- `Vue.mixin(mixin)：`全局注册一个混入，影响注册之后所有创建的每个 Vue 实例
- `Vue.compile(template)：`将一个模板字符串编译成 render 函数
- `Vue.observable(object)：`让一个对象可响应。

### Vue 中组件之间通信

```js
/*
    一、组件之间的关系
                A
                ｜
                B
            ---------
           ｜        ｜
           C         D
        AB、BC、BD是父子关系
        CD是兄弟关系
        AC、AD是隔代关系（可能隔多代）
    二、Vue中通信方式：props, $emit/$on, $parent/$children, $attrs/$listeners, provide/inject, vuex
        1、父组件通过props向自组件传递信号
        2、子组件通过事件形式向父组件传递信号
        3、（$emit/$on）可以实现任何组件之间的通信
        4、
*/
```
