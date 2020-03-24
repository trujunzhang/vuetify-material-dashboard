
// Utilities
import kebabCase from 'lodash/kebabCase'
import { mapState } from 'vuex'

export default {
  name: 'ItemGroup',

  inheritAttrs: false,

  props: {
    item: {
      type: Object,
      default: () => ({
        avatar: undefined,
        group: undefined,
        title: undefined,
        children: []
      })
    },
    subGroup: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    ...mapState(['barColor']),
    children () {
      return this.item.children.map(item => ({
        ...item,
        to: !item.to ? undefined : `${this.item.group}/${item.to}`
      }))
    },
    computedText () {
      if (!this.item || !this.item.title) { return '' }

      let text = ''

      this.item.title.split(' ').forEach((val) => {
        text += val.substring(0, 1)
      })

      return text
    },
    group () {
      return this.genGroup(this.item.children)
    }
  },

  methods: {
    genGroup (children) {
      return children
        .filter(item => item.to)
        .map((item) => {
          const parent = item.group || this.item.group
          let group = `${parent}/${kebabCase(item.to)}`

          if (item.children) {
            group = `${group}|${this.genGroup(item.children)}`
          }

          return group
        }).join('|')
    }
  }
}


