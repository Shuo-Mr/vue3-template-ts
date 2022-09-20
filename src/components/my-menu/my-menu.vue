<!--
 * @Description:
 * @Author: Lxc 1533761120@qq.com
 * @Date: 2022-09-20 16:24:46
 * @LastEditors: Lxc 1533761120@qq.com
 * @LastEditTime: 2022-09-20 18:03:39
-->
<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @select="selectHandle"
      v-if="menuList"
    >
      <el-menu-item  v-for="(menu, index) in menuList" :key="index" :index="menu.title">
        <el-icon><component :is="menu.icon" /></el-icon>
        <template #title>{{ menu.title }}</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script src="./my-menu.ts" lang="ts"></script>
