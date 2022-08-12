<!--
 * @Description: demo
 * @Author: Xiaochun liu
 * @Date: 2022-08-08 15:09:37
 * @LastEditors: Xiaochun liu
 * @LastEditTime: 2022-08-12 16:09:10
-->
<template>
  <div class="demo flex">
    <div>
      <ButtonPage :title="buttonTitle" :desc="buttonDesc" />
      <BasicType />
      <InterfaceTest />
    </div>
  </div>
</template>

<script lang="ts" src="./DemoView.ts"></script>

<style lang="scss" scoped></style>
