/*
 * @Description: 接口练习
 * @Author: Xiaochun liu
 * @Date: 2022-08-12 16:03:48
 * @LastEditors: Xiaochun liu
 * @LastEditTime: 2022-08-12 16:26:55
 */
import { defineComponent } from 'vue';

interface LabelledValue {
  label: string;
}

export default defineComponent({
  name: 'interfaceTest',
  setup() {
    function printLabel(labelledObj: LabelledValue) {
      console.log('printLabel:', labelledObj.label);
    }
    const myObj = { size: 10, label: 'Size 10 Object' };
    printLabel(myObj);

    return {};
  },
});
