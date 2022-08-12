<!--
 * @Description: demo
 * @Author: Shuo Liang
 * @Date: 2022-08-08 15:09:37
 * @LastEditors: liangshuo liangshuoone@aliyun.com
 * @LastEditTime: 2022-08-12 16:44:44
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

<script src="./DemoView.ts" lang="ts"></script>
<style src="./DemoView.scss" lang="scss" scoped></style>
