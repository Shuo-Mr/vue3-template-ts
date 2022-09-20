/*
 * @Description:
 * @Author: Lxc 1533761120@qq.com
 * @Date: 2022-09-20 16:25:39
 * @LastEditors: Lxc 1533761120@qq.com
 * @LastEditTime: 2022-09-20 17:54:10
 */
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'myMenu',
  props: {
    menuList: {
    // 菜单列表
      type: Array,
    },
  },
  emits: ['selectHandle'],
  setup(props, { emit }) {
    const isCollapse = ref(true);
    const selectHandle = (index: string) => {
      emit('selectHandle', index);
    };

    return {
      isCollapse, selectHandle,
    };
  },
});
