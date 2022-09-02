/*
 * @Description: 接口练习
 * @Author: Xiaochun liu
 * @Date: 2022-08-12 16:03:48
 * @LastEditors: Lxc 1533761120@qq.com
 * @LastEditTime: 2022-09-02 10:38:33
 */
import { defineComponent } from 'vue';

interface LabelledValue {
  label: string;
}
// 可选属性
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any; // 添加一个字符串索引签名，前提是你能够确定这个对象可能具有某些做为特殊用途使用的额外属性
}
// 只读属性
// interface Point {
//   readonly x: number;
//   readonly y: number;
// }

// 函数类型
interface SearchFunc {
  // 函数必须返回布尔值
  (source: string, subString: string): boolean
}
// 可索引的类型
interface StringArray {
  // 当用 number去索引StringArray时会得到string类型的返回值
  [index: number]: string
}

export default defineComponent({
  name: 'interfaceTest',
  setup() {
    // LabelledValue
    function printLabel(labelledObj: LabelledValue): string {
      return `printLabel:${labelledObj.label}`;
    }
    const myObj = { size: 10, label: 'Size 10 Object' };
    const print: string = printLabel(myObj);

    // SquareConfig
    function createSquare(config: SquareConfig): {color: string, area: number} {
      const newSquare = { color: 'white', area: 100 };
      if (config.color) {
        newSquare.color = config.color;
      }
      if (config.width) {
        newSquare.area = config.width * config.width;
      }
      return newSquare;
    }
    const obj = { colo: 'red', width: 100 }; // 绕开检查
    // const mySquare = createSquare({ color: 'black' }); // √
    const mySquare = createSquare(obj);

    // Point // 做为变量使用的话用 const，若做为属性则使用readonly。
    // const p1: Point = { x: 10, y: 20 };
    // p1.x = 5; // error!
    let a: number[] = [1, 2, 3, 4];
    const ro: ReadonlyArray<number> = a; // ReadonlyArray<T>确保数组创建后再也不能被修改
    // ro[0] = 12; // error!
    // ro.push(5); // error!
    // ro.length = 100; // error!
    // a = ro; // error!
    a = ro as number[];

    // SearchFunc
    const mySearch: SearchFunc = function fun(source: string, subString: string) : boolean {
      const result = source.search(subString);
      return result > -1;
    };
    console.log('mySearch("word", "w"):', mySearch('word', 'w'));

    // StringArray
    const myArray: StringArray = ['Bob', 'Fred'];
    const myStr: string = myArray[0];
    console.log('myStr', myStr);

    return {
      print,
      mySquare,
      a,
      ro,
      mySearch,
    };
  },
});
