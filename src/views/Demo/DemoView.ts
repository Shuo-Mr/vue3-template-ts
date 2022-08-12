/*
 * @Description: demo
 * @Author: Xiaochun liu
 * @Date: 2022-08-12 13:44:05
 * @LastEditors: Xiaochun liu
 * @LastEditTime: 2022-08-12 13:59:45
 */
import { defineComponent, ref } from 'vue';
import ButtonPage from './components/button-page.vue';
import BasicType from './components/basic-type/basic-type.vue';

export default defineComponent({
  components: { ButtonPage, BasicType },
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
