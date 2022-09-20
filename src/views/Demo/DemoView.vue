<!--
 * @Description: demo
 * @Author: Shuo Liang
 * @Date: 2022-08-08 15:09:37
 * @LastEditors: Lxc 1533761120@qq.com
 * @LastEditTime: 2022-09-20 17:35:15
-->
<template>
  <div class="demo flex">
    <MyMenu class="my-menu" :menuList="menuList" @selectHandle="selectHandle" />
    <div class="main-content">
      <component :is="mainIndex"/>
    </div>
  </div>
</template>

<script src="./DemoView.ts" lang="ts"></script>
<style src="./DemoView.scss" lang="scss" scoped></style>
