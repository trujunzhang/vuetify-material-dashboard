
export default {
  name: 'BaseMaterialSnackbar',

  props: {
    dismissible: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: ''
    },
    value: Boolean
  },

  data () {
    return {
      internalValue: this.value
    }
  },

  watch: {
    internalValue (val, oldVal) {
      if (val === oldVal) { return }

      this.$emit('input', val)
    },
    value (val, oldVal) {
      if (val === oldVal) { return }

      this.internalValue = val
    }
  }
}
