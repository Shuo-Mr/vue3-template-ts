import { defineComponent, ref } from 'vue';
import ButtonPage from './components/ButtonPage';

enum Color {
  Red,
  Green,
  Blue,
}
const c: Color = Color.Green;

export default defineComponent({
  components: {
    ButtonPage,
  },
  setup() {
    // type
    const isDone = false;
    console.log('Boolean isDone:', isDone);
    const decLiteral = 6;
    console.log('Number decLiteral:', decLiteral);
    const name = 'bob';
    console.log('String name:', name);

    const list: number[] = [1, 2, 3];
    const num: Array<number> = [1, 2, 3];
    const str: string[] = ['1', '2', '3'];
    console.log('Array list:', list, 'num:', num, 'str:', str);

    const x: (string | number)[] = ['hello', 10];
    // console.log(x[0].substr(1)); // x[0]不一定是string，故爆红提醒
    console.log((x[0] as string).substring(1, 2)); // 知道索引为0，是string
    console.log(String(x[0]).substring(1, 2)); // 强制转为string
    x[3] = 'world';
    console.log(x[1].toString());

    console.log('enum c:', c);
    const buttonTitle = ref<string>('button-page');
    const buttonDesc = ref({
      label: 'is label',
      id: 1000,
    });

    return {
      buttonTitle,
      buttonDesc,
    };
  },
});
