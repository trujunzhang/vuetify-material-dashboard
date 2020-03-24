
import Themeable from 'vuetify/lib/mixins/themeable'

export default {
  name: 'Item',

  mixins: [Themeable],

  props: {
    item: {
      type: Object,
      default: () => ({
        href: undefined,
        icon: undefined,
        subtitle: undefined,
        title: undefined,
        to: undefined
      })
    },
    text: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    computedText () {
      if (!this.item || !this.item.title) { return '' }

      let text = ''

      this.item.title.split(' ').forEach((val) => {
        text += val.substring(0, 1)
      })

      return text
    },
    href () {
      return this.item.href || (!this.item.to ? '#' : undefined)
    }
  }
}
