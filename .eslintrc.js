/*
 * @Description: file content
 * @Author:
 * @Date: 2022-08-08 11:00:07
 * @LastEditors: Xiaochun liu
 * @LastEditTime: 2022-08-11 18:22:47
 */
module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true, // 用于解决：error 'defineProps'/'defineEmits' is not defined
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
};
