/*
 * @Description: demo
 * @Author: Xiaochun liu
 * @Date: 2022-08-12 13:44:05
 * @LastEditors: Lxc 1533761120@qq.com
 * @LastEditTime: 2023-05-22 10:23:14
 */
import { defineComponent, ref } from 'vue';
import MyMenu from '@/components/my-menu/my-menu.vue';
import ListTransition from './components/ListTransition';
import Canvas from './components/Canvas';

type menuItem = {
  title: string,
  icon: string,
}

export default defineComponent({
  components: { MyMenu, ListTransition, Canvas },
  setup() {
    // 菜单列表
    const menuList: menuItem[] = [
      {
        title: 'ListTransition',
        icon: 'List',
      }, {
        title: 'Canvas',
        icon: 'Picture',
      },
    ];
    const mainIndex = ref('');
    const selectHandle = (item: string) => {
      mainIndex.value = item;
    };

    return { menuList, mainIndex, selectHandle };
  },
});
