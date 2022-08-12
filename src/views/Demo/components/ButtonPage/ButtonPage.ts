import { defineComponent, PropType } from 'vue';

export default defineComponent({

  props: {
    title: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
