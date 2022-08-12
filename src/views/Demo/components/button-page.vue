<!--
 * @Description: file content
 * @Author:
 * @Date: 2022-08-11 16:14:09
 * @LastEditors: Xiaochun liu
 * @LastEditTime: 2022-08-12 14:41:55
-->
<template>
  <div>
    <h3>{{ title }}</h3>
    <el-button :icon="Search" circle />
    <el-button type="primary" :icon="Edit" circle />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
  </div>
</template>

<script lang="ts" setup>
import {
  Check, Delete, Edit, Message, Search, Star,
} from '@element-plus/icons-vue';
import { PropType, toRefs } from 'vue';

const props = defineProps({
  title: String as PropType<string>,
});

const { title } = toRefs(props);
</script>
