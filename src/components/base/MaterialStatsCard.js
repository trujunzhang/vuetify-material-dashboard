
import Card from './Card'

export default {
  name: 'MaterialStatsCard',

  inheritAttrs: false,

  props: {
    ...Card.props,
    icon: {
      type: String,
      required: true
    },
    subIcon: {
      type: String,
      default: undefined
    },
    subIconColor: {
      type: String,
      default: undefined
    },
    subTextColor: {
      type: String,
      default: undefined
    },
    subText: {
      type: String,
      default: undefined
    },
    title: {
      type: String,
      default: undefined
    },
    value: {
      type: String,
      default: undefined
    },
    smallValue: {
      type: String,
      default: undefined
    }
  }
}
