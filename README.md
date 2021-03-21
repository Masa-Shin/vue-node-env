# vue-node-env
Vue plugin to safely determine app runnning environment from Vue components.

# Installation

```
yarn add vue-node-env // using yarn
npm i vue-node-env // using npm
```

# Settings

main.js
```
import Vue from 'vue'
import App from './App.vue'
import env from 'vue-node-env'
    
Vue.use(env)

new Vue({
  render: h => h(App),
}).$mount('#app')
```

This plugin assumes `NODE_ENV` environmental variable is set by Vue CLI. So if you want to set `NODE_ENV` manually and its possible values are not the same as Vue cli's defaults (i.e. `development`, `production`, `test`), you can pass an option to override them.

```
// If NODE_ENV would be 'local', 'prod' or 'unit_test'.
Vue.use(env, {
  development: 'local',
  production: 'prod',
  test: 'unit_test'
})
```

# Usage

```
this.$env.isDev() // true if NODE_ENV === 'development'
this.$env.isProd() // true if NODE_ENV === 'production'
this.$env.isTest() // true if NODE_ENV === 'test'
```
