import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      value: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
    });
    // 修改用户备注弹窗
    const showPicker = ref(false);

    const d = reactive({
      ha: false,
    });

    const show = ref(false);

    const list = ref([
      {
        id: 546,
        name: ' 有优惠',
        groupId: 33,
        groupName: '个人标签',
        type: 1,
      },
    ]);

    const onChange = (val: string) => {
      console.log('当前选中数据：', val);
      state.value = val;
    };

    return {
      state,
      list,
      d,
      show,
      onChange,
      showPicker,
    };
  },
});
