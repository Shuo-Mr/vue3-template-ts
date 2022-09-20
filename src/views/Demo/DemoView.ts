/*
 * @Description: demo
 * @Author: Xiaochun liu
 * @Date: 2022-08-12 13:44:05
 * @LastEditors: Lxc 1533761120@qq.com
 * @LastEditTime: 2022-09-20 18:20:08
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
  setup() {
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
