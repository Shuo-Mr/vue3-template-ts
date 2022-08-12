/*
 * @Description: file content
 * @Author:
 * @Date: 2022-08-08 11:00:07
 * @LastEditors: Xiaochun liu
 * @LastEditTime: 2022-08-12 11:33:50
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
  // parser: '@typescript-eslint/parser', // 解析器
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 枚举 is already declared in the upper scope
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    // 枚举成员 is defined but never used
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-explicit-any': ['off'], // ts 定义数据类型为any不报错
  },
};
