import _Test from './components/Test.vue'

export function install (Vue) {
  Vue.component('test', _Test)
}

export const Test = _Test

export default {
  version: '{{ version }}',
  install,
}
