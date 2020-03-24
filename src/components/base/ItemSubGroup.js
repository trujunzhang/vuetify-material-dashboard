
export default {
  name: 'ItemSubGroup',

  props: {
    item: {
      type: Object,
      default: () => ({
        avatar: undefined,
        group: undefined,
        title: undefined,
        children: []
      })
    }
  }
}
