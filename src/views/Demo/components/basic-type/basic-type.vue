<!--
 * @Description: 基础类型
 * @Author: Xiaochun liu
 * @Date: 2022-08-12 13:45:14
 * @LastEditors: Xiaochun liu
 * @LastEditTime: 2022-08-12 14:41:13
-->
<template>
  <div class="basic-type-wrap">
    <h3>basic-type 基础类型</h3>
    <div class="basic-type-cont">
      <div>Boolean isDone:{{ isDone }}</div>
      <div>Number decLiteral: {{ decLiteral }}</div>
      <div>String name: {{ name }}</div>
      <div>Array list:{{ list }}, num: {{ num }}, str: {{ str }}</div>
    </div>
  </div>
</template>

<script lang="ts" src="./basic-type.ts"></script>
<style lang="scss" scoped src="./basic-type.scss"></style>
