
export default {
  name: 'MaterialCard',

  props: {
    avatar: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'success'
    },
    icon: {
      type: String,
      default: undefined
    },
    image: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },

  computed: {
    classes () {
      return {
        'v-card--material--has-heading': this.hasHeading
      }
    },
    hasHeading () {
      return Boolean(this.$slots.heading || this.title || this.icon)
    },
    hasAltHeading () {
      return Boolean(this.$slots.heading || (this.title && this.icon))
    }
  }
}
