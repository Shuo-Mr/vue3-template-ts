<!--
 * @Description: file content
 * @Author: 梁烁
 * @Date: 2022-08-08 11:00:07
 * @LastEditors: Xiaochun liu
 * @LastEditTime: 2022-08-12 16:14:54
-->
<template>
  <nav>
    <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
    <router-link to="/demo">Demo</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import '@/assets/style/index.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
