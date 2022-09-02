<!--
 * @Description: 接口练习
 * @Author: Xiaochun liu
 * @Date: 2022-08-12 16:03:37
 * @LastEditors: Lxc 1533761120@qq.com
 * @LastEditTime: 2022-09-02 10:22:13
-->
<template>
  <div class="wrapper">
    <h3>interface 接口</h3>
    <div class="content">
      <div>{{ print }}</div>
      <div>可选属性 mySquare: {{ mySquare }}</div>
      <div>只读属性 a: {{ a }} ro: {{ ro }}</div>
      <div>函数类型 mySearch('word', 'w'): {{ mySearch('word', 'w')}}</div>
    </div>
  </div>
</template>

<script lang="ts" src="./InterfaceTest.ts"></script>
<style lang="sass" scoped />
