/*
 * @Description: 接口练习
 * @Author: Xiaochun liu
 * @Date: 2022-08-12 16:03:48
 * @LastEditors: Lxc 1533761120@qq.com
 * @LastEditTime: 2022-09-02 14:11:13
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

// 类和接口
// interface ClockInterface {
//   currentTime: Date;
//   setTime: (d: Date) => void;
// }
// class Clock implements ClockInterface {
//   currentTime: Date;
//   // currentTime!: Date; // !声明的时候断言，解决因为没有在初始化的时候赋值出现报错，或者初始化时赋值this.currentTime = new Date();

//   setTime(d: Date) {
//     this.currentTime = d;
//   }

//   constructor(h: number, m: number) {
//     this.currentTime = new Date();
//     console.log(h, m);
//   }
// }

// 继承接口,一个接口可以继承多个接口，创建出多个接口的合成接口
interface Shape {
  color: string;
}
interface PenStroke {
  penWidth: number;
}
interface Square extends Shape, PenStroke {
  sideLength: number;
}

// 混合类型
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
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

    // ClockInterface Clock
    // console.log(Clock);

    // 继承接口
    const square = <Square>{};
    square.color = 'blue';
    square.sideLength = 10;
    square.penWidth = 5.0;
    console.log(square);

    // 混合类型
    function getCounter(): Counter {
      const counter = <Counter> function StartCounter(start: number) { console.log(start); };
      counter.interval = 123;
      counter.reset = function ResetCounter() { console.log('ResetCounter'); };
      return counter;
    }
    const c = getCounter();
    c(10);
    c.reset();
    c.interval = 5.0;

    return {
      print,
      mySquare,
      a,
      ro,
      mySearch,
    };
  },
});
