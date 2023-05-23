<!--
通过内建的 <TransitionGroup> 实现“FLIP”列表过渡效果。
https://aerotwist.com/blog/flip-your-animations/
-->

<template>
  <!-- <button @click="insert">insert at random index</button>
  <button @click="reset">reset</button> -->
  <!-- <button @click="shuffleList">shuffle</button> -->

  <TransitionGroup tag="ul" name="fade" class="container">
    <div v-for="item in items" class="item" :key="item.name">
      {{ item.name }}：{{ item.value }}
      <!-- <button @click="remove(item.name)">x</button> -->
    </div>
  </TransitionGroup>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, ref, watch,
} from 'vue';
// import { shuffle } from 'lodash-es';

export default defineComponent({
  name: 'listTransition',
  setup() {
    interface Items {
      name: string
      value: number
    }
    const items = ref<Items[]>([
      {
        name: 'a',
        value: 1,
      }, {
        name: 'b',
        value: 2,
      }, {
        name: 'c',
        value: 3,
      }, {
        name: 'd',
        value: 4,
      }, {
        name: 'e',
        value: 5,
      },
    ]);

    const shuffleList = () => {
      // items.value = shuffle(items.value);
      items.value = items.value.sort((a, b) => b.value - a.value);
    };

    // const remove = (name: string) => {
    //   const i = items.value.map((item) => item.name).indexOf(name);
    //   if (i > -1) {
    //     items.value.splice(i, 1);
    //   }
    // };

    const updateData = () => {
      items.value = items.value.map((item) => ({
        ...item,
        value: Math.floor(Math.random() * 100), // 将 value 属性随机更新为 0-99 的整数
      }));
    };

    onMounted(() => {
      const timer = setInterval(updateData, 5000); // 每 5 秒更新一次数据
      watch(items, () => {
        shuffleList();
      }); // 监听 items 的变化并更新数据
      return () => clearInterval(timer);
    });

    return {
      // insert,
      // reset,
      shuffleList,
      // remove,
      items,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  padding: 0;
}

.item {
  width: 300px;
  height: 30px;
  margin-bottom: 10px;
  background-color: #f3f3f3;
  border: 1px solid #666;
  box-sizing: border-box;
}

/* 1. 声明过渡效果 */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. 声明进入和离开的状态 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. 确保离开的项目被移除出了布局流
      以便正确地计算移动时的动画效果。 */
.fade-leave-active {
  position: absolute;
}
</style>
