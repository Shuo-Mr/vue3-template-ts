/*
 * @Description: 基础类型
 * @Author: Xiaochun liu
 * @Date: 2022-08-12 13:46:33
 * @LastEditors: liangshuo liangshuoone@aliyun.com
 * @LastEditTime: 2022-08-12 17:28:22
 */
import { defineComponent } from 'vue';

// 枚举
// enum Color {
//   Red,
//   Green,
//   Blue,
// }
// const c: Color = Color.Green;

enum Color {
  Red = 1,
  Green,
  Blue,
}
const colorName: string = Color[2];

export default defineComponent({
  setup() {
    // type
    const isDone = false;

    const decLiteral = 6;

    const name = 'bob';

    const list: number[] = [1, 2, 3];
    const num: Array<number> = [1, 2, 3];
    const str: string[] = ['1', '2', '3'];

    const x: (string | number)[] = ['hello', 10];
    // console.log(x[0].substr(1)); // x[0]不一定是string，故爆红提醒
    console.log((x[0] as string).substring(1, 2)); // 类型断言 知道索引为0，是string
    console.log(String(x[0]).substring(1, 2)); // 强制转为string
    x[3] = 'world';
    console.log(x[1].toString());

    // console.log('enum c:', c);

    console.log(colorName); // 显示'Green'因为上面代码里它的值是2

    // const notSure: any = 4;
    // notSure.ifItExists(); // okay, ifItExists might exist at runtime
    // notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
    const listArr: any[] = [1, true, 'free'];
    listArr[1] = 100;
    console.log(listArr);

    // void 表示没有任何类型, void类型的变量: 只能为它赋予 undefined 和 null
    function warnUser(): void {
      console.log('This is my warning message');
    }
    warnUser();
    return {
      isDone,
      decLiteral,
      name,
      list,
      num,
      str,
    };
  },
});
