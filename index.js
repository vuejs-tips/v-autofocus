const directive = {
  inserted: el => el.focus(),
  install: Vue => Vue.directive("autofocus", directive)
}

// auto install directive if Vue is global
typeof window !== "undefined" && window.Vue && window.Vue.use(directive)

export default directive
