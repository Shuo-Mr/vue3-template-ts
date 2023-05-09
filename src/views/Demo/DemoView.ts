/*
 * @Description: demo
 * @Author: Xiaochun liu
 * @Date: 2022-08-12 13:44:05
 * @LastEditors: Xiaochun liu
 * @LastEditTime: 2023-05-09 13:45:49
 */
import { defineComponent, ref } from 'vue';
import MyMenu from '@/components/my-menu/my-menu.vue';
import BasicType from './components/BasicType';
import InterfaceTest from './components/InterfaceTest';

type menuItem = {
  title: string,
  icon: string,
}

export default defineComponent({
  components: { BasicType, InterfaceTest, MyMenu },
  async setup() {
    // 菜单列表
    const menuList: menuItem[] = [
      {
        title: 'BasicType',
        icon: 'Watermelon',
      }, {
        title: 'InterfaceTest',
        icon: 'Pear',
      },
    ];
    const mainIndex = ref('');
    const selectHandle = (item: string) => {
      mainIndex.value = item;
    };

    return { menuList, mainIndex, selectHandle };
  },
});
