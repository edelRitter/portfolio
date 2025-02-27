import socialNetworking from './sns.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'ui/sns/socialnetworking',
  component: socialNetworking,
  tags: ['autodocs'],
  argTypes: {
    onClick: {},
    alignment: {
      control: {
        type: 'select',
      },
      options: [
        'ui-catalog__sns-left',
        'ui-catalog__sns-center',
        'ui-catalog__sns-right',
      ],
    },
  },
}

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Left = {
  args: {
    alignment: 'ui-catalog__sns-left',
  },
}

export const Center = {
  args: {
    alignment: 'ui-catalog__sns-center',
  },
}

export const Right = {
  args: {
    alignment: 'ui-catalog__sns-right',
  },
}
