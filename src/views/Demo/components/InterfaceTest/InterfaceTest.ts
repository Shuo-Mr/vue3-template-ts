/*
 * @Description: 接口练习
 * @Author: Xiaochun liu
 * @Date: 2022-08-12 16:03:48
 * @LastEditors: Lxc 1533761120@qq.com
 * @LastEditTime: 2022-09-01 15:30:38
 */
import { defineComponent } from 'vue';

interface LabelledValue {
  label: string;
}

export default defineComponent({
  name: 'interfaceTest',
  setup() {
    function printLabel(labelledObj: LabelledValue): string {
      return `printLabel:${labelledObj.label}`;
    }
    const myObj = { size: 10, label: 'Size 10 Object' };
    const print: string = printLabel(myObj);

    return {
      print,
    };
  },
});
