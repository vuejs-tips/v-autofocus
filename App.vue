<template>
  <div>
    <input placeholder="without v-autofocus" />
    <input placeholder="with v-autofocus" v-autofocus />
  </div>
</template>

<script>
import autofocus from "./index"

export default {
  directives: {
    autofocus,
  },
}
</script>
