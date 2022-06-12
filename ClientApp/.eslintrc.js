module.exports = {
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
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
}
