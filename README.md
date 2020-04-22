# Vue autofocus input directive

![size](https://img.badgesize.io/https://unpkg.com/@vuejs-tips/v-autofocus@0.1.0/dist/v-autofocus.umd.min.js.svg?compression=gzip)

## Demo

https://unpkg.com/@vuejs-tips/v-autofocus/dist/demo.html

https://codesandbox.io/s/v-autofocus-bbg2z?file=/src/App.vue

## Usage

```vue
<template>
  <div>
    <input v-autofocus />
  </div>
</template>

<script>
import autofocus from "@vuejs-tips/v-autofocus"

export default {
  directives: {
    autofocus
  }
}
</script>
```

Or importing globally as a plugin:

```js
import autofocus from "@vuejs-tips/v-autofocus"
Vue.use(autofocus)
```
