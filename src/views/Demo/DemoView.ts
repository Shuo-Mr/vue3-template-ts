/*
 * @Description: demo
 * @Author: Xiaochun liu
 * @Date: 2022-08-12 13:44:05
 * @LastEditors: liangshuo liangshuoone@aliyun.com
 * @LastEditTime: 2022-08-12 16:54:00
 */
import { defineComponent, ref } from 'vue';
import ButtonPage from './components/ButtonPage';
import BasicType from './components/BasicType';
import InterfaceTest from './components/InterfaceTest';

export default defineComponent({
  components: { ButtonPage, BasicType, InterfaceTest },
  setup() {
    // button-page
    const buttonTitle = ref<string>('button-page');
    const buttonDesc = ref({
      label: 'is label',
      id: 1000,
    });
    console.log('buttonDesc', buttonDesc);

    return {
      buttonTitle,
      buttonDesc,
    };
  },
});
