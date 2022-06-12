# Vite Base Starter Template - Vue3

This is an initial starter template for Vite and Vue3.

There are the base setup of plugins and config to get started on a project quicker without having to initially import, configure and add plugins.

# Table of Contents

- [Running and building](#running-and-building)
- [Recommended IDE Setup](#recommended-ide-setup)
- [Pre-Installed and configured plugins](#pre-installed-and-configured-plugins)
- [Skeleton structure](#skeleton-structure)
  - [Vuex](#vuex)
    - [Adding Modules](#adding-modules)
  - [Vue Router](#vue-router)
    - [Turn on Vue Router](#turn-on-vue-router)
    - [Vue Router Config](#vue-router-config)
- [Customisable Cofigurations](#customisable-cofigurations)
  - [eslint](#eslint)
  - [prettier](#prettier)
  - [Tailwindcss](#tailwindcss)
- [Styling](#styling)

## Running and building

To Run locally with Hot Module Replacement:
`yarn dev`

To build the project:
`yarn build`

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Pre-Installed and configured plugins

- autoprefixer - [npm package](https://www.npmjs.com/package/autoprefixer)
- axios - [npm package](https://www.npmjs.com/package/axios)
- eslint - [npm package](https://www.npmjs.com/package/eslint)
- eslint-config-prettier - [npm package](https://www.npmjs.com/package/eslint-config-prettier)
- eslint-plugin-vue - [npm package](https://www.npmjs.com/package/eslint-plugin-vue)
- @heroicons/vue - [npm package](https://www.npmjs.com/package/@heroicons/vue) - [icon library](https://heroicons.com/)
- lodash - [npm package](https://www.npmjs.com/package/lodash)
- postcss - [npm package](https://www.npmjs.com/package/postcss)
- prettier - [npm package](https://www.npmjs.com/package/prettier)
- prettier-plugin-tailwindcss - [npm package](https://www.npmjs.com/package/prettier-plugin-tailwindcss)
- sass - [npm package](https://www.npmjs.com/package/sass)
- sass-loader - [npm package](https://www.npmjs.com/package/sass-loader)
- tailwindcss - [npm package](https://www.npmjs.com/package/tailwindcss)
- vee-validate - [npm package](https://www.npmjs.com/package/vee-validate)
- vue-axios - [npm package](https://www.npmjs.com/package/vue-axios)
- vue-router - [npm package](https://www.npmjs.com/package/vue-router)
- vue3-mq - [npm package](https://www.npmjs.com/package/vue3-mq)
- vuex - [npm package](https://www.npmjs.com/package/vuex)

## Skeleton structure

This project is just a base skeleton for initial projects with base configuration.

For example, `vue-router` and `vuex` are implemented and have their router folder and store folder setup, however there are no modules in the store and the router has the initial base routing config setup.

### Vuex

Vuex in this project is setup to use namespaced modules, at the moment there are no modules configured in the store however you can add them easily to the project

#### Adding Modules

To add a namespaced module to Vuex, create the module itself, i.e. within the store folder, or even create a modules folder within the store folder to create yout modules (my preference so they're all in one place and don't fill up the store folder).

`general-store.module.js`

And within that have your state/getters/actions/mutations and then the export for them in the file.
i.e.

```
const state = {
  ...
  // add state values here
  ...
}

const getters = {
  ...
  // add getters here
  ...
}

const actions = {
  ...
  // add actions here
  ...
}

const mutations = {
  ...
  // add mutations here
  ...
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
```

And then within the `index.js` of the `store`, import the module at the top and add the import module name to the modules section:

```
import { createStore } from 'vuex'
import GeneralStore from './modules/general-store.module.js

...

export default createStore({
  modules: {
    ...
    GeneralStore,
    ...
  },
  strict: debug,
})

```

You can find more details on Vuex and it's setup and config using their official docs here: [Vuex Official Site](https://vuex.vuejs.org/guide/)

### Vue Router

Vue router is setup to use in the project as well with base skeleton structure. It is not configured to use to start off with, however it is simple to turn on.

#### Turn on Vue Router

To have vue router functioning, you just need to open the `App.vue` file within the `src` folder and uncomment the tag `<router-view />`

Then when running again it will display the vue router components in this section.

#### Vue Router Config

Vue router in this project is only setup with a basic default route.
It's only route is set to `/` and is the `Home` component of `HelloWorld` that loads.

There is also an example of `scrollBehavior` which allows for custom scrolling between pages and by default scrolls to the top of the page on each route change.

There is also a commented out section as an exampe on how to pass props to a component via routes as well.

You can find more info and configurations on the official Vue Router site here: [Vue Router Official Site](https://router.vuejs.org/)

## Customisable Cofigurations

### eslint

Within the main folder there is a file called `.eslintrc.js` and this has the configurations for eslint that can be adjusted according to your preferences.

The initial linting rules that are set are:

```
rules: {
    // override/add rules settings here, such as:
    'vue/script-setup-uses-vars': 'error',
    'vue/require-default-prop': 'off',
    'vue/no-unused-vars': 'warn',
    // disabled the no-undef because kept leading to error in eslint
    'vue/no-undef': 'off',
    'no-undef': 'warn',
    'no-unused-vars': 'warn',
    'vue/multi-word-component-names': 'off',
  },
```

You can find a full list of the eslint rules and configuration here: [eslint configuration rules](https://eslint.org/docs/user-guide/configuring/rules)

### prettier

The prettier configuration can be found within the `.prettierrc.json` file within the root of the project.

The initial configuration consists of:

```
{
  "singleQuote": true,
  "semi": false
}
```

You can find further prettier configuration settings here: [prettier options for config](https://prettier.io/docs/en/options.html)

### Tailwindcss

This base project only has the base inital setup for tailwind css.

You can find the main configuration within the `tailwind.config.js` file within the root folder.

The initial configuration for tailwindcss consists of:

```
// an array of the colour classes to add to the safelist so they do not get purged in
// production compile
const tailwindCssPurgeSafelist = require('./src/config/tailwind-safelist.js')
module.exports = {
  purge: {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    safeList: tailwindCssPurgeSafelist,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

You may notice there is a purge safelist included and relates to `./src/config/tailwind-safelist.js` .

This file allows you to add tailwind classes that may sometimes be rendered dynamically within your project and so are not inline in the code when the project builds.
When the project builds using tailwindcss, if the classes are not inline then on build those classes are purged from the project and not included in the build.

By adding them to the safelist file it still includes them in the final build and prevents them from being purged.

`tailwind-safelist.js` example:

```
// list tailwind classes here that are dynamically loaded in code and are not inline
// so they do not get purged on build

module.exports = [
  // Alert notification color style classes e.g:
  'bg-green-100',
]

```

You can find more configurations and settings for tailwind at their official site: [tailwindcss Official Site](https://tailwindcss.com/docs/installation)

## Styling

The project allows for inline styling and using tailwindcss classes throughout, however there are also scss imports into the project.

within the `src > assets` folder you can find the `scss` folder.

This contains any custom styling classes that can be imported into the project.
main `style.scss` just imports the other `scss` files into it from the `partials` folder or any other styling files you want to create.

**There is a scss file within the parials folder and loaded into the `style.scss` file as an example for reference.**

Then the `style.scss` is imported in to the project within the `main.js` file.

**The `css` folder only contains the `style.css` which is used to import the `tailwindcss` library**
