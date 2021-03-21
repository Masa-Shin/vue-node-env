# vue-node-env
Vue plugin to safely determine app runnning environment from Vue components.

<a href="https://github.com/Masa-Shin/vue-node-env/blob/main/LICENSE">
  <img src="https://img.shields.io/badge/License-MIT-blue" />
</a>

# Installation

```
# yarn
yarn add vue-node-env

# npm
npm i vue-node-env
```

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

This plugin assumes `NODE_ENV` environmental variable is set by Vue CLI. If you want to set `NODE_ENV` manually and possible values are not the same as Vue CLI's defaults (i.e. `development`, `production`, `test`), you can pass an option to override those values.

```
// NODE_ENV would be 'local', 'prod' or 'unit_test'.
const envOptions = {
  development: 'local',
  production: 'prod',
  test: 'unit_test'
}

Vue.use(env, envOptions)
```

# Usage
```
this.$env.isDev() // true if NODE_ENV === 'development' or a string specified by option.
this.$env.isProd() // true if NODE_ENV === 'production' “
this.$env.isTest() // true if NODE_ENV === 'test' “
```

# Development Setup
```
# install deps
yarn install

# serve with hot reload
yarn watch

# build dist files
yarn build
```
